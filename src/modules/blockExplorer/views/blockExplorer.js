import BlockExplorerTemplate from './blockExplorer.html'

const BlockExplorerView = Marionette.View.extend({
    template: _.template(BlockExplorerTemplate),
    ui: {
      genesisBtn: '#genesis-block-btn',
      latestBtn: '#latest-block-btn',
      previousBtn: '#previous-block-btn',
      hashIn: '#hash-in'
    },
    triggers: {
      'click @ui.genesisBtn': 'genesisBtnPressed',
      'click @ui.latestBtn': 'latestBtnPressed',
      'click @ui.previousBtn': 'previousBtnPressed',
    },
    events: {
      'keyup @ui.hashIn': ('hashInKeyup')
    },
    hashInKeyup(ev){
      if(ev.key == 'Enter') this.triggerMethod('hash:entered')
    },
    // onHashEntered(){
    //   console.log('hola')
    // },
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
