Ext.define("y.customer.Customer",{
	extend:"Ext.data.Model",
	fields:[
		{name:'code',type:'string'},
		{name:'name',type:'string'},
		{name:'source_id',type:'string'},
		{name:'businessPhase_id',type:'string'},
		{name:'property_id',type:'string'},
		{name:'followupNum',type:'int'},
		{name:'inquiryDate',type:'date', dateFormat: 'Y-m-d H:i:s'},
		{name:'inquiryContent',type:'string'},
		{name:'website',type:'string'},
		{name:'address',type:'string'},
		{name:'experienceyear',type:'string'},
		{name:'proportion',type:'string'},
		{name:'custtype',type:'string'},
		{name:'employeeNum',type:'string'},
		{name:'purchasemoney',type:'string'},
		{name:'qualitylevel',type:'string'},
		{name:'moneylevel',type:'string'},
		{name:'payclause',type:'string'},
		{name:'id',type:'string'},
		{name:'createDate',type:'date', dateFormat: 'Y-m-d H:i:s'}
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
			read:Ext.ContextPath+'/customer/load.do',
			//load : Ext.ContextPath+'/customer/load.do',
			create:Ext.ContextPath+'/customer/create.do',
			update:Ext.ContextPath+'/customer/update.do',
			destroy:Ext.ContextPath+'/customer/destroy.do'
		}
	}
});