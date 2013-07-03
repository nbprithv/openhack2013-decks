
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.webworkers = function(req, res){
  res.render('webworkers', { title: 'Express' });
};

exports.websockets = function(req, res){
  res.render('websockets', { title: 'Express' });
};

exports.webrtc = function(req, res){
  res.render('webrtc', { title: 'Express' });
};

exports.websocket_res = function(req, res){
  res.json({ msg: 'Web socket Response' });
};

exports.notifications = function(req, res){
  res.render('notifications', { title: 'Express' });
};

exports.createjs = function(req, res){
  res.render('createjs', { title: 'Express' });
};

exports.backbonejs = function(req, res){
  console.log("AAA");
  res.render('backbonejs', { title: 'Express' });
};
