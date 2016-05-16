Ext.define("y.constant.CodeItem",{
	extend:"Ext.data.Model",
	fields:[
		{name:'code',type:'string'},
		{name:'name',type:'string'},
		{name:'status',type:'string'},
		{name:'sort',type:'int'},
		{name:'remark',type:'string'},
		{name:'id',type:'string'},
		{name:'parent_id',type:'string'},
		{name:'codeType_id',type:'string'}
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
			read:Ext.ContextPath+'/codeItem/load.do',
			//load : Ext.ContextPath+'/codeItem/load.do',
			create:Ext.ContextPath+'/codeItem/create.do',
			update:Ext.ContextPath+'/codeItem/update.do',
			destroy:Ext.ContextPath+'/codeItem/destroy.do'
		}
	}
});