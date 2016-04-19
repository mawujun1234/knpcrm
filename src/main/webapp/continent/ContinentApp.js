Ext.require("y.continent.Continent");
Ext.require("y.continent.ContinentGrid");
Ext.require("y.continent.ContinentForm");
Ext.onReady(function(){
	var grid=Ext.create('y.continent.ContinentGrid',{
		region:'center',
		title:'XXX表格'
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid]
	});



});