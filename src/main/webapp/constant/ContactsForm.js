Ext.define('y.customer.ContactsForm',{
	extend:'Ext.form.Panel',
	requires: [
	     'y.customer.Contacts'
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
	    },
		{
	        fieldLabel: 'customer_id',
	        name: 'customer_id',
            selectOnFocus:true,
	        xtype:'textfield'
	    },
		{
	        fieldLabel: 'id',
	        name: 'id',
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
