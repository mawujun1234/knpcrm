Ext.define('y.customer.CustomerGrid',{
	extend:'Ext.grid.Panel',
	requires: [
	     'y.customer.Customer'
	],
	columnLines :true,
	stripeRows:true,
	viewConfig:{
		enableTextSelection:true
	},
	initComponent: function () {
      var me = this;
      me.columns=[
      	{xtype: 'rownumberer'},
		{dataIndex:'code',header:'客户编码'
        },
		{dataIndex:'name',header:'客户名称'
        },
		{dataIndex:'source_id',header:'客户来源'
        },
		{dataIndex:'businessPhase_id',header:'业务阶段'
        },
		{dataIndex:'property_id',header:'客户性质'
        },
		{dataIndex:'followupNum',header:'跟进次数',xtype: 'numbercolumn', format:'0',align : 'right'
		},
		{dataIndex:'inquiryDate',header:'初次询盘时间',xtype: 'datecolumn', format:'Y-m-d H:i:s',width:150
		},
		{dataIndex:'inquiryContent',header:'初次询盘内容'
        },
		{dataIndex:'website',header:'网址'
        },
		{dataIndex:'address',header:'地址'
        },
//		{dataIndex:'experienceyear',header:'光带几年经验'
//        },
//		{dataIndex:'proportion',header:'占比'
//        },
//		{dataIndex:'custtype',header:'客户类型'
//        },
//		{dataIndex:'employeeNum',header:'员工人数'
//        },
//		{dataIndex:'purchasemoney',header:'光带年采购额'
//        },
//		{dataIndex:'qualitylevel',header:'质量档次'
//        },
//		{dataIndex:'moneylevel',header:'价格档次'
//        },
//		{dataIndex:'payclause',header:'付款条款'
//        },
        {dataIndex:'createDate',header:'创建时间',xtype: 'datecolumn', format:'Y-m-d H:i:s',width:150
		}
      ];
      

	  me.store=Ext.create('Ext.data.Store',{
			autoSync:false,
			pageSize:50,
			autoLoad:true,
			model: 'y.customer.Customer',
			proxy:{
				type: 'ajax',
			    url : Ext.ContextPath+'/customer/queryPager.do',
			    headers:{ 'Accept':'application/json;'},
			    actionMethods: { read: 'POST' },
			    extraParams:{limit:50},
			    reader:{
					type:'json',//如果没有分页，那么可以把后面三行去掉，而且后台只需要返回一个数组就行了
					rootProperty:'root',
					successProperty:'success',
					totalProperty:'total'		
				}
			}
	  });

	  me.dockedItems=[];
      me.dockedItems.push({
	        xtype: 'pagingtoolbar',
	        store: me.store,  
	        dock: 'bottom',
	        displayInfo: true
	  });
	  me.dockedItems.push({
	  	xtype: 'toolbar',
	  	dock:'top',
	  	//enableOverflow:true,
		items:[
			{
                xtype: 'textfield',
				itemId:'code',
                fieldLabel: '客户编码',
                labelWidth:60,
                width:150,
                selectOnFocus:true 
            },
			{
                xtype: 'textfield',
				itemId:'name',
                fieldLabel: '客户名称',
                labelWidth:60,
                width:150,
                selectOnFocus:true 
            },
		{
			fieldLabel: '客户来源',
			itemId: 'source_id',
			queryMode: 'remote',
			editable:false,
			forceSelection:true,
		    displayField: 'name',
		    valueField: 'key',
		    labelWidth:60,
            width:150,
		    store: {
			    fields: ['key', 'name'],
			    proxy: {
			    	autoLoad:true,
			        type: 'ajax',
			        url: Ext.ContextPath+'/source_id/query.do',
			        reader: {
			            type: 'json',
			            rootProperty: 'source_id'
			        }
			    }
			},
			xtype:'combobox'
		},
		{
			fieldLabel: '业务阶段',
			itemId: 'businessPhase_id',
			queryMode: 'remote',
			editable:false,
			forceSelection:true,
		    displayField: 'name',
		    valueField: 'key',
		    labelWidth:60,
            width:150,
		    store: {
			    fields: ['key', 'name'],
			    proxy: {
			    	autoLoad:true,
			        type: 'ajax',
			        url: Ext.ContextPath+'/businessPhase_id/query.do',
			        reader: {
			            type: 'json',
			            rootProperty: 'businessPhase_id'
			        }
			    }
			},
			xtype:'combobox'
		},
		{
			fieldLabel: '客户性质',
			itemId: 'property_id',
			queryMode: 'remote',
			editable:false,
			forceSelection:true,
		    displayField: 'name',
		    valueField: 'key',
		    labelWidth:60,
            width:150,
		    store: {
			    fields: ['key', 'name'],
			    proxy: {
			    	autoLoad:true,
			        type: 'ajax',
			        url: Ext.ContextPath+'/property_id/query.do',
			        reader: {
			            type: 'json',
			            rootProperty: 'property_id'
			        }
			    }
			},
			xtype:'combobox'
		},
		{
	        fieldLabel: '跟进次数',
	        itemId: 'followupNum',
            allowDecimals:false,
            labelWidth:60,
            //width:100,
	        xtype:'numberfield'   
	    },
	    	{
            	text:'查询',
            	iconCls:'icon-search',
            	handler:function(btn){
            		var grid=btn.up("grid");
	            	grid.getStore().getProxy().extraParams=Ext.apply(grid.getStore().getProxy().extraParams,{
						"params['code']":grid.down("#code").getValue(),
						"params['name']":grid.down("#name").getValue(),
						"params['source_id']":grid.down("#source_id").getValue(),
						"params['businessPhase_id']":grid.down("#businessPhase_id").getValue(),
						"params['property_id']":grid.down("#property_id").getValue(),
						"params['followupNum']":grid.down("#followupNum").getValue()
	                });
            		grid.getStore().reload();
            	}
            }
	  	]
	  });
	  
	  me.dockedItems.push({
	  		xtype: 'toolbar',
	  		dock:'top',
		  	items:[{
				text: '新增',
				itemId:'create',
				handler: function(btn){
					me.onCreate();
				},
				iconCls: 'icon-plus'
			},{
			    text: '更新',
			    itemId:'update',
			    handler: function(){
			    	me.onUpdate();
					
			    },
			    iconCls: 'icon-edit'
			},{
			    text: '删除',
			    itemId:'destroy',
			    handler: function(){
			    	me.onDelete();    
			    },
			    iconCls: 'icon-trash'
			},{
				text: '刷新',
				itemId:'reload',
				disabled:me.disabledAction,
				handler: function(btn){
					var grid=btn.up("grid");
					grid.getStore().reload();
				},
				iconCls: 'icon-refresh'
			}]
		});

       
      me.callParent();
	},
	onCreate:function(){
    	var me=this;
		var child=Ext.create('y.customer.Customer',{

		});
		child.set("id",null);
		
		var formpanel=Ext.create('y.customer.CustomerCreateForm',{});
		formpanel.loadRecord(child);
		
    	var win=Ext.create('Ext.window.Window',{
    		layout:'fit',
    		title:'新增',
    		modal:true,
    		constrainHeader:true,
    		width:650,
    		height:500,
    		closeAction:'hide',
    		items:[formpanel],
    		listeners:{
    			close:function(){
    				me.getStore().reload();
    			}
    		}
    	});
    	win.show();
    },
    
     onUpdate:function(){
    	var me=this;

    	var node=me.getSelectionModel( ).getLastSelected();
    	if(node==null){
    		Ext.Msg.alert("提醒","请选择一行数据!");
    		return;
    	}

		var formpanel=Ext.create('y.customer.CustomerForm',{});
		formpanel.loadRecord(node);
		
    	var win=Ext.create('Ext.window.Window',{
    		layout:'fit',
    		title:'更新',
    		modal:true,
    		width:400,
    		height:300,
    		closeAction:'hide',
    		items:[formpanel]
    	});
    	win.show();
    },
    
    onDelete:function(){
    	var me=this;
    	var node=me.getSelectionModel( ).getLastSelected( );

		if(!node){
		    Ext.Msg.alert("消息","请先选择一行数据");	
			return;
		}
		var parent=node.parentNode;
		Ext.Msg.confirm("删除",'确定要删除吗?', function(btn, text){
				if (btn == 'yes'){
					node.erase({
					    failure: function(record, operation) {
			            	me.getStore().reload();
					    },
					    success:function(){
					    	me.getStore().reload();
					    }
				});
			}
		});
    }
});
