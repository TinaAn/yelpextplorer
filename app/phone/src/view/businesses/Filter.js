Ext.define('YelpExtplorer.view.businesses.Filter', {
    extend: 'Ext.Toolbar',
    xtype: 'businessesfilter',
    requires: ['Ext.field.Search'],

    defaults: {
        xtype: 'searchfield',
        flex: 1,
        listeners: {
			focus: function(search) {
				var thatId = Ext.String.toggle(search.getItemId(), 'city', 'category');
				search.up('businessesfilter').down('#' + thatId).hide();
			},
			blur: function(search) {
				var thatId = Ext.String.toggle(search.getItemId(), 'city', 'category');
				search.up('businessesfilter').down('#' + thatId).show();
			}
		}
    },
    items: [{
        itemId: 'city',
        placeholder: 'City',
        bind: {
            value: '{typedCity}'
        }
    }, {
        itemId: 'category',
        placeholder: 'Category',
        bind: {
            value: '{typedCategory}'
        }
    }]

});