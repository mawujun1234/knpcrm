Ext.define("y.continent.Country",{
	extend:"Ext.data.Model",
	fields:[
		{name:'name',type:'string'},
		{name:'continent_id',type:'string'},
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
			read:Ext.ContextPath+'/country/load.do',
			//load : Ext.ContextPath+'/country/load.do',
			create:Ext.ContextPath+'/country/create.do',
			update:Ext.ContextPath+'/country/update.do',
			destroy:Ext.ContextPath+'/country/destroy.do'
		}
	}
});