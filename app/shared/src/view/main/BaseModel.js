Ext.define('YelpExtplorer.view.main.BaseModel', {
    extend: 'Ext.app.ViewModel',
    data: {
        city: 'Manhattan',
        category: 'coffee'
    },
    stores: {
        businesses: {
            model: 'YelpExtplorer.model.Business',
            pageSize: 20, // Yelp limits results to 20 at a time
			sorters: ['name']
        },
		sortableBusinesses: {
			source: '{businesses}'
		},
		categories: {
            type: 'tree',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '//traininglabs.sencha.com/go?fn=categories'
            },
        }
    }
});