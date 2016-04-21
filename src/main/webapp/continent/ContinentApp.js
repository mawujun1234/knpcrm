Ext.require("y.continent.Continent");
Ext.require("y.continent.ContinentGrid");
Ext.require("y.continent.ContinentForm");
Ext.onReady(function(){
	var grid=Ext.create('y.continent.ContinentGrid',{
		region:'west',
		split:true,
		collapsible : true,
		width:300,
		title:'洲'
	});
	
	var countryGrid=Ext.create('y.continent.CountryGrid',{
		region:'center',
		title:'国家',
		listeners:{
			render:function(grid){
				grid.mask();
			}
		}
	});
	
	grid.on("itemclick",function( view, record, item, index){
		countryGrid.unmask();
		countryGrid.getStore().getProxy().extraParams=Ext.apply(countryGrid.getStore().getProxy().extraParams,{
			continent_id:record.get("id")
		});
		countryGrid.getStore().reload();
		countryGrid.continent_id=record.get("id");
	});
	
	var viewPort=Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[grid,countryGrid]
	});



});