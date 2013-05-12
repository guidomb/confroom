module.exports = function(app) {
  app.resource('sessions', require('../controllers/sessions_controller'))
}