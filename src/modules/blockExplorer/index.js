import BlockExplorerView from './views/blockExplorer'

let currentBlock // Store last BlockModel used (current)

const blockExplorerView = new BlockExplorerView({
  onGenesisBtnPressed(){
    showBlockOnView(Modules.CMS.getGenesisBlock())
  },
  onLatestBtnPressed(){
    showBlockOnView(Modules.CMS.getLatestBlock())
  },
  onPreviousBtnPressed(){
    showBlockOnView(Modules.CMS.getBlockByHash(currentBlock.get('prev_block')))
  }
})

function showBlockOnView(block, viewer){
  block.fetch().then(() => {
    currentBlock = block
    blockExplorerView.model = block
    blockExplorerView.render()
    if(viewer) viewer(blockExplorerView)
  })
}


//// PUBLIC

function showView(viewer){
  showBlockOnView(Modules.CMS.getLatestBlock(), viewer)
}

export default { showView }
