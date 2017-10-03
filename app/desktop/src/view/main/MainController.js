Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'YelpExtplorer.view.main.BaseController',
    alias: 'controller.main-main',
	mixins: ['YelpExtplorer.view.main.Routes'],
	
	routes: {
		':tab': 'processRoute',
		':tab/:city': 'processRoute',
		':tab/:city/:category':'processRoute'
	},
	
	initViewModel: function(vm){
		this.callParent(arguments);
		vm.bind('{category}', this.updateHash, this);
		vm.bind('{city}', this.updateHash, this);
	},
	onCategoriesSelect: function(tree,record) {
		this.getViewModel().set('category', record.data.text);
	}
});
