/*
 * This is a template used when TiShadow "appifying" a titanium project.
 * See the README.
 */

Titanium.App.idleTimerDisabled = true;

var TiShadow = require("/api/TiShadow");
TiShadow.Appify = "damate";
var Compression = require('ti.compression');
require("/lib/ti-mocha");

// If new install clear cache
if (Ti.App.Properties.getString("tishadow::container_version",0) !== "1398063279220") {
  TiShadow.clearCache(true);
  Ti.App.Properties.setString("tishadow::container_version","1398063279220"); 
}


// Need to unpack the bundle on a first load;
var path_name = "damate".replace(/ /g,"_");
var target = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, path_name);
if (!target.exists()) {
  target.createDirectory();
  Compression.unzip(Ti.Filesystem.applicationDataDirectory + "/" + path_name, Ti.Filesystem.resourcesDirectory + "/" + path_name + '.zip',true);
}

//Call Home
TiShadow.connect({
  proto: "http",
  host : "192.168.1.4",
  port : "3000",
  room : "default",
  name : Ti.Platform.osname + ", " + Ti.Platform.version + ", " + Ti.Platform.address
});

//Launch the app
TiShadow.launchApp(path_name);

