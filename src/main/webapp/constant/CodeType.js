Ext.define("y.constant.CodeType",{
	extend:"Ext.data.Model",
	fields:[
		{name:'id',type:'string'},
		{name:'name',type:'string'},
		{name:'remark',type:'string'}
	],
	proxy:{
		type:'ajax',
		actionMethods: { read: 'POST' },
		timeout :600000,
		headers:{ 'Accept':'application/json;'},
		writer:{
			type:'json',
			writeRecordId:true,
			writeAllFields:true
		},
		reader:{
			type:'json',
			root:'root',
			successProperty:'success',
			totalProperty:'total'		
		},
		api:{
			read:Ext.ContextPath+'/codeType/load.do',
			//load : Ext.ContextPath+'/codeType/load.do',
			create:Ext.ContextPath+'/codeType/create.do',
			update:Ext.ContextPath+'/codeType/update.do',
			destroy:Ext.ContextPath+'/codeType/destroy.do'
		}
	}
});