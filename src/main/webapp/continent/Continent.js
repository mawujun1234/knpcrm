Ext.define("y.continent.Continent",{
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
			read:Ext.ContextPath+'/continent/load.do',
			//load : Ext.ContextPath+'/continent/load.do',
			create:Ext.ContextPath+'/continent/create.do',
			update:Ext.ContextPath+'/continent/update.do',
			destroy:Ext.ContextPath+'/continent/destroy.do'
		}
	}
});