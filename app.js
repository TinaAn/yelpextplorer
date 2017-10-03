Ext.ariaWarn = Ext.emptyFn;

Ext.application({
    extend: 'YelpExtplorer.Application',
    name: 'YelpExtplorer',
    requires: ['YelpExtplorer.view.main.Main'],
    mainView: 'YelpExtplorer.view.main.Main'
});