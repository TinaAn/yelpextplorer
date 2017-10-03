Ext.define("YelpExtplorer.view.business.edit.Window", {
    extend: 'Ext.window.Window',
    xtype: 'editbusinesswindow',
    requires: ['YelpExtplorer.view.business.edit.WindowController', 'Ext.form.Panel', 'Ext.ux.rating.Picker',],
    controller: 'business-edit-window',
    resizable: false,
    bodyPadding: 8,
    modal: true,

    layout: 'fit',

    items: [{
        xtype: 'form',
		modelValidation:true,
        reference: 'form',
        items: [{
			xtype:'textfield',
			fieldLabel:'Name',
			bind: {
				value: '{business.name}'
			}
        }/*,{
			xtype: 'rating',
			rounding: 0.5,
			minimum: 1, // Yelp ratings go from 1 - 5
			maximum: 5,
			selectedStyle: 'color: #ff4444',  // Pale red
			overStyle: 'color: #ff0000', // Red
			bind: {
				value: '{business.rating}'
			},
			//tpl: '<img src="resources/images/stars_{rating}.png">'
		}*/],
        buttons: [{
            text: 'Save',
			handler: 'onSaveClick',
			ui:'save',
			formBind:true
        }, {
            text: 'Cancel',
			handler: 'onCancelClick'
        }]
    }]

});