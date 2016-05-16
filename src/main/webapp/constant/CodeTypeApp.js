Ext.require("y.constant.CodeType");
Ext.require("y.constant.CodeTypeGrid");
Ext.require("y.constant.CodeTypeForm");
Ext.require("y.constant.CodeItemGrid");
Ext.onReady(function(){
	var grid=Ext.create('y.constant.CodeTypeGrid',{
		region:'west',
		width:400,
		split:true,
		title:'常数类型'
	});
	
	var codeItemGrid=Ext.create('y.constant.CodeItemGrid',{
		region:'center',
		title:'常数项',
		listeners:{
			render:function(grid){
				grid.mask();
			}
		}
	});
	
	grid.on("itemclick",function(grid, record, item, index, e, eOpts){
		codeItemGrid.getStore().getProxy().extraParams=Ext.apply(codeItemGrid.getStore().getProxy().extraParams,{
			codeType_id:record.get("id")
		});
		codeItemGrid.getStore().reload();
		codeItemGrid.unmask();
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid,codeItemGrid]
	});



});