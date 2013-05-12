module.exports = {

  index: function(req, res){
    res.send('forum index');
  },
  
  new: function(req, res){
    res.send('new forum');
  },
  
  create: function(req, res){
    res.send('create forum');
  },
  
  show: function(req, res){
    res.send('show forum ' + req.params.forum);
  },
  
  edit: function(req, res){
    res.send('edit forum ' + req.params.forum);
  },
  
  update: function(req, res){
    res.send('update forum ' + req.params.forum);
  },
  
  destroy: function(req, res){
    res.send('destroy forum ' + req.params.forum);
  }

}