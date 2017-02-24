function showView(view){
  App.showView(view)
}

function start(){
  console.log(window.Modules.BlockExplorer.getView())
  showView(window.Modules.BlockExplorer.getView())
}

// API
const API = {
  start
}
export default API
