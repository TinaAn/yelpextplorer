Ext.define('YelpExtplorer.view.business.Detail',{
    extend: 'Ext.panel.Panel',
    xtype: 'businessdetail',
	
	requires:['YelpExtplorer.view.business.DetailController'],
	
	controller:'businessdetail',
	
	tbar: {
		items: [{
			text: 'Edit',
			disabled: true,
			bind: {
				disabled: '{!business}'
			},
			handler: 'onEditClick'
		}]
	},
	
    tpl: [
		'<tpl if="this.isData(values)">',
		'<div><table><tr><td style="vertical-align:top">',
		'<b>{name}</b><br/>',
		'{[Ext.Array.map(values.categories, function(item){return item[0];}).join("&nbsp;")]}<br/>',
		'<img src="resources/images/stars_{rating}.png"/><br/>',
		'Reviews: {review_count}',
		'<tpl if="this.isPortrait()"></td><td style="vertical-align:top"></tpl>',
		'<img src="{image_url}" style="margin: 8px 4px 16px 4px;" /><br/>&nbsp;',
		'<tpl if="this.isPortrait()"></td><td style="vertical-align:top"></tpl>',
		'{[values.location.display_address.join("<br/>")]}',
		'<tpl if="this.isPortrait()"></td><td style="vertical-align:top"></tpl>',
		'<a href="{url}" target="_blank">Review at Yelp</a>',
		'</td></tr></table></div>',
		'</tpl>', {
			isData: function(data) {
				return !Ext.Object.isEmpty(data);
			},
			isPortrait: function() {
				return (Ext.dom.Element.getOrientation() === 'portrait');
			}
		}
	],
	bodyPadding:6,
	
	setRegion: function(region) {
		this.callParent(arguments);
		this.setData(this.getData());
	}
});