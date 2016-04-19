/**
 * 显示在顶部的按钮菜单，可以切换至标准菜单，菜单树
 */
Ext.define('y.main.menu.ButtonMainMenu', {
			extend : 'y.main.ux.ButtonTransparent',
			alias : 'widget.buttonmainmenu',

			text : '菜单',
			glyph : 0xf0c9,

			initComponent : function() {
				this.menu = this.up('app-main').getViewModel().getMenus();
				this.callParent();
			}
			
		})