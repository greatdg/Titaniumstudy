var p = require('/api/PlatformRequire');
var log = require('/api/Log');
var TiShadowReporter = require('/api/TiShadowReporter');
var JUnitXMLReporter = require('/api/JUnitXMLReporter');

//jasmine.getEnv().addReporter(new TiShadowReporter());


function loadSpecs(name, base, filter) {
  var dir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + name + "/spec/" + base);
  var files = dir.getDirectoryListing();
  if (!files) {
    return;
  };
  files.forEach(function(file) {
    if (file.match(/_spec.js$/)) {
      p.require("/spec/" + base + "/" + (file.replace(".js", "")));
    } else if (filter === {} || filter[file]) {
      loadSpecs(name, base + "/" + file, filter);
    }
  });
}

exports.run = function (name, junitxml, type) {
  var jasmine;
  //For a new environment reset
  p.clearCache();
  type = type || "jasmine";
  if (type === "jasmine") {
    jasmine = require('/lib/jasmine').jasmine;
    jasmine.currentEnv_ = new jasmine.Env();
    if (junitxml) {
      jasmine.getEnv().addReporter(new JUnitXMLReporter());
    } else {
      jasmine.getEnv().addReporter(new TiShadowReporter());
    }
  } else if (type === 'jasmine2') {
    jasmine = (function() {
      this.should = require('/lib/should');
      var jasmineRequire = require('/lib/jasmine-2.0.0/jasmine');
      var jasmineBoot = require('/lib/jasmine-2.0.0/node-boot');
      return jasmineBoot(jasmineRequire, this);
    })();
    var TiShadowReporter2 = require('/api/TiShadowReporter2');
    jasmine.getEnv().addReporter(new TiShadowReporter2({
      log: log.test,
      showColors: true,
      timer: new jasmine.Timer(),
      onComplete: function() {
        log.test('Runner Finished');
      }
    }));
  }

  var filter_file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + name + "/spec/specs");
  var filter = {};
  if (filter_file.exists()) {
    filter_file.read().text.split("\n").forEach(function(dir) {
      filter[dir.trim()] = 1;
    });
  }
  require("/api/Localisation").clear();
  loadSpecs(name, "", filter);
  if (type === "jasmine" || type === 'jasmine2') {
    jasmine.getEnv().execute();
  } else {
    mocha.run(function(){
      log.test("Runner Finished");
    });
  }
}



