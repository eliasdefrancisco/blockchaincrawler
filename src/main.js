import './vendor/libs'
import layout from './modules/layout'
import blockExplorer from './modules/blockExplorer'
import cms from './modules/CMS'

const app = new Marionette.Application({
  region: '#main'
})

function init(){
  window.App = app
  layout.startLy(blockExplorer, cms)
}

$(document).ready(() => {
  if(window.cordova) {
    document.addEventListener('deviceReady', init, false)
  } else {
    init()
  }
})
