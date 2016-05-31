Ext.define('y.customer.CustomerForm',{
	extend:'Ext.form.Panel',
	requires: [
	     'y.customer.Customer'
	],
	
    frame: true,
    autoScroll : true,
	buttonAlign : 'center',
    bodyPadding: '5 5 0',


    defaults: {
        msgTarget: 'under',
        labelWidth: 75,
        labelAlign:'right',
        anchor: '90%'
    },
	initComponent: function () {
       var me = this;
       me.items= [
         {
       	   xtype:'fieldset',
	       layout: {
				 type: 'table',
		        // The total column count must be specified here
		        columns: 2
		    },
		    title:'基本信息',
			items:[{
		        fieldLabel: '客户编码',
		        name: 'code',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"客户编码不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '客户名称',
		        name: 'name',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"客户名称不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
				fieldLabel: '客户来源',
				name: 'source_id',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'id',
			    store: {
				    fields: ['id', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/source/query.do',
				        reader: {
				            type: 'json'
				        }
				    }
				},
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"客户来源不允许为空",
				xtype:'combobox'
			},
			{
				fieldLabel: '业务阶段',
				name: 'businessPhase_id',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'id',
			    store: {
				    fields: ['id', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/businessPhase/query.do',
				        reader: {
				            type: 'json'
				        }
				    }
				},
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"业务阶段不允许为空",
				xtype:'combobox'
			},
			{
				fieldLabel: '客户性质',
				name: 'property_id',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'id',
			    store: {
				    fields: ['id', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/property/query.do',
				        reader: {
				            type: 'json'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
				fieldLabel: '跟进次数',
				name: 'followupNum',
				editable:false,
				readOnly:true,
				xtype:'numberfield'
			},
			{
	            fieldLabel: '初次询盘时间',
	            name: 'inquiryDate',
	            editable:false,
	            colspan:2,
	            xtype: 'datefield',
	            format: 'Y-m-d'   
	        },
			{
				fieldLabel: '初次询盘内容',
				name: 'inquiryContent',
				colspan:2,
				width: '100%' ,
				xtype:'textarea'
			},
			{
		        fieldLabel: '网址',
		        name: 'website',
		        colspan:2,
				width: '100%' ,
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '地址',
		        name: 'address',
		        colspan:2,
				width: '100%' ,
	            selectOnFocus:true,
		        xtype:'textfield'
		    }]
        },
        {
       	   xtype:'fieldset',
	       layout: {
				 type: 'table',
		        // The total column count must be specified here
		        columns: 2
		    },
		    title:'客户星级',
			items:[
			{
		        fieldLabel: '光带几年经验',
		        name: 'experienceyear',
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '占比',
		        name: 'proportion',
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
				fieldLabel: '客户类型',
				name: 'custtype',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'key',
			    store: {
				    fields: ['key', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/custtype/query.do',
				        reader: {
				            type: 'json',
				            rootProperty: 'custtype'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
				fieldLabel: '员工人数',
				name: 'employeeNum',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'key',
			    store: {
				    fields: ['key', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/employeeNum/query.do',
				        reader: {
				            type: 'json',
				            rootProperty: 'employeeNum'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
				fieldLabel: '光带年采购额',
				name: 'purchasemoney',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'key',
			    store: {
				    fields: ['key', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/purchasemoney/query.do',
				        reader: {
				            type: 'json',
				            rootProperty: 'purchasemoney'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
				fieldLabel: '质量档次',
				name: 'qualitylevel',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'key',
			    store: {
				    fields: ['key', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/qualitylevel/query.do',
				        reader: {
				            type: 'json',
				            rootProperty: 'qualitylevel'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
				fieldLabel: '价格档次',
				name: 'moneylevel',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'key',
			    store: {
				    fields: ['key', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/moneylevel/query.do',
				        reader: {
				            type: 'json',
				            rootProperty: 'moneylevel'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
				fieldLabel: '付款条款',
				name: 'payclause',
				queryMode: 'remote',
				editable:false,
				forceSelection:true,
			    displayField: 'name',
			    valueField: 'key',
			    store: {
				    fields: ['key', 'name'],
				    proxy: {
				    	autoLoad:true,
				        type: 'ajax',
				        url: Ext.ContextPath+'/payclause/query.do',
				        reader: {
				            type: 'json',
				            rootProperty: 'payclause'
				        }
				    }
				},
				xtype:'combobox'
			},
			{
		        fieldLabel: 'id',
		        name: 'id',
	            hidden:true,
	            selectOnFocus:true,
		        xtype:'textfield'
		    }]
        }
	  ];   
	  
	  
	  this.buttons = [];
		this.buttons.push({
			text : '保存',
			itemId : 'save',
			formBind: true, //only enabled once the form is valid
       		disabled: true,
			glyph : 0xf0c7,
			handler : function(button){
				var formpanel = button.up('form');
				formpanel.updateRecord();
				formpanel.getForm().getRecord().save({
					failure: function(record, operation) {
				    },
				    success: function(record, operation) {
						button.up('window').close();
				    }
				});			
				
				}
			},{
				text : '关闭',
				itemId : 'close',
				glyph : 0xf00d,
				handler : function(button){
					button.up('window').close();
				}
	    });
      me.callParent();
	}
});
