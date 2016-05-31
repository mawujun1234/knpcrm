Ext.require("y.customer.Customer");
Ext.require("y.customer.CustomerGrid");
Ext.require("y.customer.CustomerForm");
Ext.onReady(function(){
	var grid=Ext.create('y.customer.CustomerGrid',{
		region:'center',
		title:'XXX表格'
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid]
	});



});