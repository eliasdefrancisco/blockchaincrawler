function showView(view){
  App.showView(view)
}

function start(){
  Modules.BlockExplorer.showView(showView)
}

// API
const API = {
  start
}
export default API
