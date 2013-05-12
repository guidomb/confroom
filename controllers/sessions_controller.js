var mongoose = require('mongoose');
require('../models/session');

var Session = mongoose.model('Session');

module.exports = {

  new: function(req, res){
    res.render('sessions/new');
  },
  
  create: function(req, res){
    var session = new Session(req.body);
    session.save(function(err) {
      if (err) {
        res.render('sessions/new', { session: session, errors: err.errors });
      } else {
        res.redirect('sessions/show');
      }
    });
  },
  
  show: function(req, res){
    Session.findById(req.param('session'), function(err, session) {
      if (err) {
        res.send('ERROR!');
      }
      res.render('session/show', { session: session })
    });
  },
  
  // edit: function(req, res){
  //   res.send('edit forum ' + req.params.forum);
  // },
  
  // update: function(req, res){
  //   res.send('update forum ' + req.params.forum);
  // },
  
  // destroy: function(req, res){
  //   res.send('destroy forum ' + req.params.forum);
  // }

}