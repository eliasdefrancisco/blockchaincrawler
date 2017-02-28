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
    templateContext: {
      dateFormat(date){
        const d = new Date(date * 1000)
        return d.toLocaleString()
      },
      txLength(tx){
        return eval(tx).length // eval() !!!
      },
      formatBytes(bytes,decimals) {
        if(bytes == 0) return '0 Bytes'
        const k = 1000
        const  dm = decimals + 1 || 3
        const  sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const  i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
      }
    }
})

export default BlockExplorerView
