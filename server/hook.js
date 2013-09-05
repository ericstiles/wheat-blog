// create a gith server on port 7500
var gith = require('gith').create( 7500 );

gith({
  repo: 'ericstiles/wheat-blog'
}).on( 'all', function( payload ) {
    console.log( 'Post-receive form Github');
    //console.log("Payload = " + JSON.stringify(payload));
    var gitRepoPath = "/home/node/wheat-blog.git";
    var gitCommand = "git --git-dir " + gitRepoPath + " fetch origin master:master";
    var gitLogUpdate = "git --git-dir " + gitRepoPath + " log -1 --pretty=oneline";
    var sys = require('sys')
    var exec = require('child_process').exec;
    var fetchOutput = exec(gitCommand, function puts(error, stdout, stderr) {
        if (error) {
          console.log('Error occurred \n[' + error+']');
        } else{
          var updateOutput = exec(gitLogUpdate, function puts(error, stdout, stderr) {
            if (error) {
              console.log('Error occurred getting git update \n[' + error+']');
            } else {
              console.log("Update:" + stdout);
            }
          });
        }
      }
    );

    fetchOutput.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
    });

  });

// create a gith server on port 7500
var gith = require('gith').create( 7600 );

gith({
  repo: 'ericstiles/wheat'
}).on( 'all', function( payload ) {
    console.log( 'Post-receive form Github');
    //console.log("Payload = " + JSON.stringify(payload));
    var gitRepoPath = "/home/node/wheat-blog.git/wheat.git";
    var gitCommand = "git --git-dir " + gitRepoPath + " fetch origin master:master";
    var gitLogUpdate = "git --git-dir " + gitRepoPath + " log -1 --pretty=oneline";
    var sys = require('sys')
    var exec = require('child_process').exec;
    var fetchOutput = exec(gitCommand, function puts(error, stdout, stderr) {
        if (error) {
          console.log('Error occurred \n[' + error+']');
        } else{
          var updateOutput = exec(gitLogUpdate, function puts(error, stdout, stderr) {
            if (error) {
              console.log('Error occurred getting git update \n[' + error+']');
            } else {
              console.log("Update:" + stdout);
            }
          });
        }
      }
    );

    fetchOutput.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
    });

  });