Ext.define("YelpExtplorer.view.businesses.TabPanel", {
    extend: "Ext.tab.Panel",
    xtype: 'businessestabpanel',
	mixins:['Ext.mixin.Responsive'],
	requires: [
		'YelpExtplorer.view.businesses.Grid',
		'YelpExtplorer.view.businesses.Map',
		'YelpExtplorer.view.businesses.View'
	],

	reference:'businessestabpanel',
	
	responsiveConfig: {
		wide: {
			tabPosition: 'top'
		},
		tall: {
			tabPosition: 'left'
		}
	},
	
    items: [{
		title: 'Map',
		itemId: 'map',
		xtype: 'businessesmap',
		bind: {
			location: '{location}',
			store: '{businesses}',
			selection: '{business}'
		}
	}, {
		title: 'View',
		itemId: 'view',
		xtype: 'businessesview',
		bind: {
			store: '{businesses}',
			selection: '{business}'
		}
	}, {
        title: 'Grid',
		itemId: 'grid',
        xtype: 'businessesgrid',
		bind: {
			store: '{sortableBusinesses}',
			selection: '{business}'
		}
    }]

});