Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
		'YelpExtplorer.view.businesses.TabPanel',
		'YelpExtplorer.view.businesses.Filter'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },
	
	listeners: {
		pop: 'onPop'
	},

    items: [{
		title: 'YelpExtplorer',
		layout: 'fit',
		xtype: 'container',
		items: [{
				xtype: 'businessesfilter',
				docked: 'top'
			}, {
				xtype: 'businessestabpanel'
		}]
	}]
});