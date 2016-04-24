Ext.define("y.baseinfo.Source",{
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
			read:Ext.ContextPath+'/source/load.do',
			//load : Ext.ContextPath+'/source/load.do',
			create:Ext.ContextPath+'/source/create.do',
			update:Ext.ContextPath+'/source/update.do',
			destroy:Ext.ContextPath+'/source/destroy.do'
		}
	}
});