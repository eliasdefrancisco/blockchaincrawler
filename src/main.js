import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import layout from './modules/layout'
import blockExplorer from './modules/blockExplorer'

const app = new Marionette.Application({
  region: '#main'
})

function setGlobal(){
  window.$ = window.jQuery = global.jQuery = $
  window._ = _
  window.Backbone = Backbone
  window.Marionette = Marionette
  window.App = app
  window.Modules = {}
  window.Modules.Layout = layout
  window.Modules.BlockExplorer = blockExplorer
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
