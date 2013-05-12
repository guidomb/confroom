module.exports = {

  new: function(req, res){
    res.render('sessions/new');
  },
  
  create: function(req, res){

    res.redirect('sessions/show')    
  },
  
  show: function(req, res){
    res.render('sessions/show');
  }

}