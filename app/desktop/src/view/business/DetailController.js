Ext.define('YelpExtplorer.view.business.DetailController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.businessdetail',
	
	requires: ["YelpExtplorer.view.business.edit.Window"],
	
	onEditClick: function(button) {
		this.getView().add(Ext.create({
			xtype: 'editbusinesswindow',
			title: 'Business',
			autoShow: true
		}));
	}
});