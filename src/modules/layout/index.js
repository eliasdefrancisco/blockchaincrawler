function showView(view){
  App.showView(view)
}


//// PUBLIC

function start(){
  Modules.BlockExplorer.showView(showView)
}

export default { start }
