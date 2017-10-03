Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'YelpExtplorer.view.Banner',
		'YelpExtplorer.view.business.Detail',
		'YelpExtplorer.view.businesses.TabPanel',
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.businesses.Filter',
		'YelpExtplorer.view.businesses.Categories'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    dockedItems: [{
        dock: 'top',
        xtype: 'banner'
    }, {
        dock: 'top',
        xtype: 'businessesfilter'
    }],
    layout: 'border',
    items: [{
		xtype: 'categories',
		region:'west',
		width:200,
		collapsible: true,
		split:true,
		title: 'Categories',
		listeners: {
			select: 'onCategoriesSelect'
		},
		bind: {
			store: '{categories}'
		}
	},{
        region: 'center',
        xtype: 'businessestabpanel',
		listeners: {
			tabchange: 'onBusinessesTabChange'
		}
    }, {
		region: 'east',
		xtype: 'businessdetail',
		plugins: ['responsive'],
		responsiveConfig: {
			wide: {
				region: 'east'
			},
			 tall: {
				region: 'south'
			}
		},
		width: 130,
		bind: {
			data: {
				bindTo: '{business}',
				deep: true
			}
		}
	}]

});