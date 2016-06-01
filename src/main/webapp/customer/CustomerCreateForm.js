Ext.define('y.customer.CustomerCreateForm',{
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
		    title:'默认联系方式',
			items:[{
		        fieldLabel: '联系人',
		        name: 'contacts',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"联系人不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '职位',
		        name: 'position',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"职位不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '电话',
		        name: 'tel',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"电话不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '手机',
		        name: 'tel_mobile',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"手机不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '聊天账号',
		        name: 'chatNum',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"聊天账号不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '传真',
		        name: 'fax',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"传真不允许为空",
	            selectOnFocus:true,
		        xtype:'textfield'
		    },
			{
		        fieldLabel: '电子邮件',
		        name: 'email',
	            allowBlank: false,
	            afterLabelTextTpl: Ext.required,
	            blankText:"电子邮件不允许为空",
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
				codeType_id:
				xtype:'codeitemcombo'
			},
			{
				fieldLabel: '员工人数',
				name: 'employeeNum',
				xtype:'textfield'
			},
			{
				fieldLabel: '光带年采购额',
				name: 'purchasemoney',
				xtype:'textfield'
			},
			{
				fieldLabel: '质量档次',
				name: 'qualitylevel',
				codeType_id:
				xtype:'codeitemcombo'
			},
			{
				fieldLabel: '价格档次',
				name: 'moneylevel',
				codeType_id:
				xtype:'codeitemcombo'
			},
			{
				fieldLabel: '付款条款',
				name: 'payclause',
				codeType_id:
				xtype:'codeitemcombo'
			},
			{
		        fieldLabel: 'id',
		        name: 'id',
	            hidden:true,
	            selectOnFocus:true,
		        xtype:'textfield'
		    },{
		        fieldLabel: 'createDate',
		        name: 'createDate',
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
