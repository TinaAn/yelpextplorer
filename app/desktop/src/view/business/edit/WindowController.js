Ext.define('YelpExtplorer.view.business.edit.WindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.business-edit-window',

	onSaveClick: function(button){
		this.getViewModel().get('business').commit();
		this.getView().close();
	},
	onCancelClick: function(button){
		this.getViewModel().get('business').reject();
		this.getView().close();
	}
});