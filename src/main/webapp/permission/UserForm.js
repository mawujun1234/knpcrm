Ext.define('y.permission.UserForm',{
	extend:'Ext.form.Panel',
	requires: [
	     'y.permission.User'
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
	        fieldLabel: '姓名',
	        name: 'name',
	        allowBlank: false,
            afterLabelTextTpl: Ext.required,
            blankText:"不允许为空",
	        xtype:'textfield'
	    },
		{
	        fieldLabel: '登录名',
	        name: 'loginName',
	        allowBlank: false,
            afterLabelTextTpl: Ext.required,
            blankText:"不允许为空",
	        xtype:'textfield'
	    },
		{
	        fieldLabel: '密码',
	        name: 'pwd',
	         allowBlank: false,
            afterLabelTextTpl: Ext.required,
            blankText:"不允许为空",
	        xtype:'textfield'
	    },
		{
	        fieldLabel: '备注',
	        name: 'remark',
	        xtype:'textfield'
	    },
		{
	        fieldLabel: 'id',
	        name: 'id',
            hidden:true,
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
				button.up('form').updateRecord();
				
				button.up('form').getForm().getRecord().save({
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