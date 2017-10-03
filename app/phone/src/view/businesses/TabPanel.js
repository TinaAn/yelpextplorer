Ext.define('YelpExtplorer.view.businesses.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'businessestabpanel',
    requires: [
		'YelpExtplorer.view.businesses.Map',
		'YelpExtplorer.view.businesses.List'
		],

    tabBar: {
        docked: 'bottom',
        defaults: {
            iconAlign: 'top'
        }
    },
    defaults: {
        iconAlign: 'top'
    },
    items: [{
		title: 'Map',
		xtype: 'businessesmap',
		iconCls: 'x-fa fa-map-marker',
		bind: {
			location: '{location}',
			store: '{businesses}',
			selection: '{business}'
		},
		listeners: {
			itemtap: 'onBusinessesMapItemTap'
		}
	}, {
		title: 'List',
		xtype: 'businesseslist',
		iconCls: 'x-fa fa-list',
		bind: {
			store: '{businesses}',
			selection: '{business}'
		},
		listeners: {
			itemtap: 'onBusinessesListItemTap'
		}
	}]


});