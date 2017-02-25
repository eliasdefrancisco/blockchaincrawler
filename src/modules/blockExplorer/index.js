import BlockExplorerView from './views/blockExplorer'

function showView(viewer){
  const block = Modules.CMS.getBlockByHash()
  block.fetch().then(() => {
    const blockExplorerView = new BlockExplorerView({model: block})
    viewer(blockExplorerView)
  })

}


// API
const API = {
  showView
}
export default API
