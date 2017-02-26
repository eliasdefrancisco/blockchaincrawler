function showView(view){
  App.showView(view)
}


//// PUBLIC

function startLy(blockExplorer, cms){
  blockExplorer.showView(showView, cms)
}

export default { startLy }
