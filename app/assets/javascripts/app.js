/**
 *= require_self
 */

// Set valid ExtJS loading path (/vendor/assets/extjs4/src)
// Ext.Loader.setPath('Ext', '/assets/extjs4/src');
Ext.Loader.setConfig({enabled:true});

// create a new instance of Application class
Ext.application({
  name: 'AM',

  appFolder: '/assets/app',

  controllers: [
			'Authentication' 
		],

  autoCreateViewport: true,
});


Ext.onReady(function(){
	Ext.Ajax.on('beforerequest', function(conn, options) {
	    var content, metatag;
	    metatag = Ext.select('meta[name="csrf-token"]');
	    if (metatag.first() != null) {
	      content = metatag.first().dom.content;
	      options.headers || (options.headers = {});
	      return options.headers["X-CSRF-Token"] = content;
	    }
	  }, this);
	
	
	var currentUser = localStorage.getItem("currentUser");
	console.log("The currentUser: " + currentUser );
	
	var newCurrentUser = +localStorage.getItem("newCurrentUser");
	console.log("The newCurrentUser: " + newCurrentUser );
});
