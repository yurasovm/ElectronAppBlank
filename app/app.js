var debug			= false;
var app				= require('app');
var BrowserWindow	= require( 'browser-window' );

app.on( 'ready', function(){
	var mainWindow = new BrowserWindow({
		width		: 1024,
		height		: 768,
	});

	mainWindow.loadURL('file://' + __dirname + '/app.html');

	if ( debug ) {
		mainWindow.openDevTools({
			detach : false,
		});
	}
});