import BlockExplorerView from './views/blockExplorer'

let currentBlock // Store last BlockModel used (current)
let cms // Store module which consults models

const blockExplorerView = new BlockExplorerView({
  onGenesisBtnPressed(){
    showBlockOnView(cms.getGenesisBlock())
  },
  onLatestBtnPressed(){
    showBlockOnView(cms.getLatestBlock())
  },
  onPreviousBtnPressed(){
    showBlockOnView(cms.getBlockByHash(currentBlock.get('prev_block')))
  },
  onHashBtnPressed(){
    showBlockOnView(cms.getBlockByHash(this.ui.hashIn.val()))
  }
})

function showBlockOnView(block, viewer){
  block.fetch().then(() => {
    currentBlock = block
    console.log(currentBlock)
    blockExplorerView.model = block
    blockExplorerView.render()
    if(viewer) viewer(blockExplorerView)
  })
}


//// PUBLIC

function showView(viewer, _cms){
  cms = _cms
  showBlockOnView(cms.getLatestBlock(), viewer)
}

export default { showView }
