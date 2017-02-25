import './vendor/libs'
import layout from './modules/layout'
import blockExplorer from './modules/blockExplorer'
import cms from './modules/CMS'

const app = new Marionette.Application({
  region: '#main'
})

function setGlobal(){
  window.App = app
  window.Modules = {}
  window.Modules.Layout = layout
  window.Modules.BlockExplorer = blockExplorer
  window.Modules.CMS = cms
}

function init(){
  setGlobal()
  Modules.Layout.start()
}

$(document).ready(() => {
  if(window.cordova) {
    document.addEventListener('deviceReady', init, false)
  } else {
    init()
  }
})
