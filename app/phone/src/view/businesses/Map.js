Ext.define('YelpExtplorer.view.businesses.Map', {
    extend: 'Ext.ux.google.Map',
    xtype: 'businessesmap',
    twoWayBindable: ['selection'],
    mixins: ['YelpExtplorer.util.Map']
});