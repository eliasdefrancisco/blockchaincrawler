function getView(){
  const View = Marionette.View.extend({
    template: _.template('<p>Marionette.View From blockExplorer</p>')
  })
  return new View()
}


// API
const API = {
  getView
}
export default API
