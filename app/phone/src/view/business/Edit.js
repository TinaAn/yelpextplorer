Ext.define('YelpExtplorer.view.business.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'businessedit',

    bodyPadding: 8,
    layout: {
        type: 'vbox'
    },
    items: [{
        xtype: 'component',
        height: 20
    }, {
        xtype: 'textfield',
        label: 'Name',
        bind: {
            value: '{business.name}'
        }
    }, {
        xtype: 'component',
        height: 20
    }, {
        xtype: 'togglefield',
        label: 'Closed',
        bind: {
            value: '{business.is_closed}'
        }
    }, {
        xtype: 'component',
        height: 20
    }, {
        xtype: 'urlfield',
        label: 'URL',
        bind: {
            value: '{business.url}'
        }
    }],
	bbar:[{
		text: 'Reset',
		handler: 'onResetClick'
	}]
});