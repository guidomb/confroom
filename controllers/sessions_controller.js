module.exports = {

  // index: function(req, res){
  //   res.send('forum index');
  // },
  
  new: function(req, res){
    res.render('sessions/new');
  },
  
  create: function(req, res){

    res.redirect('sessions/show')    
  },
  
  show: function(req, res){
    res.send('show forum');
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