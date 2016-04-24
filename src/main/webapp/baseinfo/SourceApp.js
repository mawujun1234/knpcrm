Ext.require("y.baseinfo.Source");
Ext.require("y.baseinfo.SourceGrid");
Ext.require("y.baseinfo.SourceForm");
Ext.onReady(function(){
	var grid=Ext.create('y.baseinfo.SourceGrid',{
		region:'center',
		title:'XXX表格'
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid]
	});



});