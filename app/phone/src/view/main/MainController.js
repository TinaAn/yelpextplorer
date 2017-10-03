Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'YelpExtplorer.view.main.BaseController',
    alias: 'controller.main-main',
	requires: ['YelpExtplorer.view.business.Edit'],
    pushDetail: function(business) {
		if (this.getView().down('businessdetail')) return;
		this.getView().push({
			xtype: 'businessdetail',
			//reference: 'businessdetail',
			title: business.data.name,
			header: false,
			data: business.data
		});
	},
    onBusinessesMapItemTap: function(map, coordinate, business) {
        this.pushDetail(business);
    },
    onBusinessesListItemTap: function(list, index, target, business) {
        this.pushDetail(business);
    },
	onResetClick: function(button) {
		var business = this.getViewModel().get('business');
		business.reject();
	},
	onPop: function(view, card) {
		if (card.edit) {
			var business = this.getViewModel().get('business');
			business.commit();
			//this.lookupReference('businessdetail').setData(business.data);
			this.getView().down('businessdetail').setData(business.data);
		}
	},
	onEditClick: function(button) {
		var business = this.getViewModel().get('business');
		this.getView().push({
			xtype: 'businessedit',
			header: false,
			viewModel: {
				data: {
					business: business
				}
			},
			edit: true, // Just a made-up property we'll use on the pop later
			title: ('Edit ' + business.data.name)
		});
	}
});