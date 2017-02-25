import BlockExplorerTemplate from './blockExplorer.html'

const BlockExplorerView = Marionette.View.extend({
    template: _.template(BlockExplorerTemplate)
})

export default BlockExplorerView
