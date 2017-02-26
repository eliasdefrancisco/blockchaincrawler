import BlockExplorerTemplate from './blockExplorer.html'

const BlockExplorerView = Marionette.View.extend({
    template: _.template(BlockExplorerTemplate),
    ui: {
      genesisBtn: '#genesis-block-btn',
      latestBtn: '#latest-block-btn',
      previousBtn: '#previous-block-btn',
      hashIn: '#hash-in',
      hashBtn: '#hash-btn'
    },
    triggers: {
      'click @ui.genesisBtn': 'genesisBtnPressed',
      'click @ui.latestBtn': 'latestBtnPressed',
      'click @ui.previousBtn': 'previousBtnPressed',
      'click @ui.hashBtn': 'hashBtnPressed' 
    },
    templateContext: {
      dateFormat(date){
        const d = new Date(date * 1000)
        return d.toLocaleString()
      },
      txLength(tx){
        return eval(tx).length // eval() !!!
      }
    }
})

export default BlockExplorerView
