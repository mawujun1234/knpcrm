Ext.define("y.baseinfo.Property",{
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
			read:Ext.ContextPath+'/property/load.do',
			//load : Ext.ContextPath+'/property/load.do',
			create:Ext.ContextPath+'/property/create.do',
			update:Ext.ContextPath+'/property/update.do',
			destroy:Ext.ContextPath+'/property/destroy.do'
		}
	}
});