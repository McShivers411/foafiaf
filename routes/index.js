var FOAFIAF_MapRoutes = require('./foafiaf_map')

/** Homepage *///
exports.index = function(req, res) {
  var viewData = {
    title: 'FOAFIAF',
    description: ''
    //authenticated: req.session.oauth_access_token ? true : false
  };
  res.render('index', viewData);
};

// foafiaf_map maps to  
exports.foafiaf_map=  FOAFIAF_MapRoutes.foafiaf_map;
