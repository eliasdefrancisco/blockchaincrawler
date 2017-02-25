import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

window.$ = window.jQuery = global.jQuery = $
window._ = _
window.Backbone = Backbone
window.Marionette = Marionette

export {
    _,
    Backbone,
    Marionette,
};
