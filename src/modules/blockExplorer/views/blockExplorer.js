import BlockExplorerTemplate from './blockExplorer.html'

const BlockExplorerView = Marionette.View.extend({
    template: _.template(BlockExplorerTemplate),
    ui: {
      genesisBtn: '#genesis-block-btn',
      latestBtn: '#latest-block-btn',
      previousBtn: '#previous-block-btn',
    },
    triggers: {
      'click @ui.genesisBtn': 'genesisBtnPressed',
      'click @ui.latestBtn': 'latestBtnPressed',
      'click @ui.previousBtn': 'previousBtnPressed'
    }
})

export default BlockExplorerView
