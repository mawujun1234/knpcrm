Ext.define("y.customer.Contacts",{
	extend:"Ext.data.Model",
	fields:[
		{name:'contacts',type:'string'},
		{name:'position',type:'string'},
		{name:'tel',type:'string'},
		{name:'tel_mobile',type:'string'},
		{name:'chatNum',type:'string'},
		{name:'fax',type:'string'},
		{name:'email',type:'string'},
		{name:'customer_id',type:'string'},
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
			type:'json'
			///rootProperty:'root',
			//successProperty:'success',
			//totalProperty:'total'		
		},
		api:{
			read:Ext.ContextPath+'/contacts/load.do',
			//load : Ext.ContextPath+'/contacts/load.do',
			create:Ext.ContextPath+'/contacts/create.do',
			update:Ext.ContextPath+'/contacts/update.do',
			destroy:Ext.ContextPath+'/contacts/destroy.do'
		}
	}
});