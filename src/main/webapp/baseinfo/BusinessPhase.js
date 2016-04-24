Ext.define("y.baseinfo.BusinessPhase",{
	extend:"Ext.data.Model",
	fields:[
		{name:'name',type:'string'},
		{name:'remark',type:'string'},
		{name:'id',type:'string'}
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
			read:Ext.ContextPath+'/businessPhase/load.do',
			//load : Ext.ContextPath+'/businessPhase/load.do',
			create:Ext.ContextPath+'/businessPhase/create.do',
			update:Ext.ContextPath+'/businessPhase/update.do',
			destroy:Ext.ContextPath+'/businessPhase/destroy.do'
		}
	}
});