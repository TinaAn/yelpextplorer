Ext.define('YelpExtplorer.view.businesses.Filter', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'businessesfilter',
    items: [{
		xtype: 'textfield',
		fieldLabel: 'City',
		labelWidth: 26,
		bind: {
			value: '{typedCity}'
		}
	}, '', {
		xtype: 'textfield',
		fieldLabel: 'Category',
		labelWidth: 56,
		bind: {
			value: '{typedCategory}'
		}
	}],
	renderConfig: {
		city: '',
		category: ''
	},
    padding: 4
});
