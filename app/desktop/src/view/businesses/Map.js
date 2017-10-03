Ext.define('YelpExtplorer.view.businesses.Map', {
    extend: 'Ext.Component',
    xtype: 'businessesmap',
    mixins: ['Ext.mixin.Mashup', 'YelpExtplorer.util.Map'],
    requiredScripts: [
        '//maps.googleapis.com/maps/api/js?key=AIzaSyDNaGlNMrYqXF_gyaunvKje1aW_jBBG_CQ'
    ],
    twoWayBindable: ['selection'],
    getMap: function() {
        this.map = this.map || new google.maps.Map(this.getEl().dom, {
            zoom: 15
        });
        return this.map;
    }
});
