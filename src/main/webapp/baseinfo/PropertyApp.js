Ext.require("y.baseinfo.Property");
Ext.require("y.baseinfo.PropertyGrid");
Ext.require("y.baseinfo.PropertyForm");
Ext.onReady(function(){
	var grid=Ext.create('y.baseinfo.PropertyGrid',{
		region:'center',
		title:'XXX表格'
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid]
	});



});