Ext.require("y.baseinfo.BusinessPhase");
Ext.require("y.baseinfo.BusinessPhaseGrid");
Ext.require("y.baseinfo.BusinessPhaseForm");
Ext.onReady(function(){
	var grid=Ext.create('y.baseinfo.BusinessPhaseGrid',{
		region:'center',
		title:'XXX表格'
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid]
	});



});