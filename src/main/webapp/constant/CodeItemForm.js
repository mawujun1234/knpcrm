Ext.define('y.constant.CodeItemForm',{
	extend:'Ext.form.Panel',
	requires: [
	     'y.constant.CodeItem'
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
	        fieldLabel: '代码',
	        name: 'code',
            selectOnFocus:true,
	        xtype:'textfield'
	    },
		{
	        fieldLabel: '名称',
	        name: 'name',
            selectOnFocus:true,
	        xtype:'textfield'
	    },
		{
			fieldLabel: '状态',
			name: 'status',
			queryMode: 'local',
			editable:false,
			forceSelection:true,
		    displayField: 'name',
		    valueField: 'key',
		    store: {
			    fields: ['key', 'name'],
			    data : [
			    	{"key":"enable", "name":"可用"},
			    	{"key":"disable", "name":"失效"}
			    ]
			},
            allowBlank: false,
            afterLabelTextTpl: Ext.required,
            blankText:"状态不允许为空",
			xtype:'combobox'
		},
		{
	        fieldLabel: '顺序',
	        name: 'sort',
            allowDecimals:false,
            selectOnFocus:true,
	        xtype:'numberfield'   
	    },
		{
	        fieldLabel: '描述',
	        name: 'remark',
            selectOnFocus:true,
	        xtype:'textfield'
	    },
		{
	        fieldLabel: 'id',
	        name: 'id',
            hidden:true,
            selectOnFocus:true,
	        xtype:'textfield'
	    },
		{
	        fieldLabel: 'parent_id',
	        name: 'parent_id',
            hidden:true,
            selectOnFocus:true,
	        xtype:'textfield'
	    },
		{
	        fieldLabel: 'codeType_id',
	        name: 'codeType_id',
            hidden:true,
            selectOnFocus:true,
	        xtype:'textfield'
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
