// TODO: Transpiling html templates
//import BlockExplorerTemplate from './blockExplorer.html'
const BlockExplorerTemplate =
`
<ul>
  <li>blockHash: <%= hash %></li>
  <li>prevBlockHash: <%= prev_block %></li>
</ul>
`

const BlockExplorerView = Marionette.View.extend({
    template: _.template(BlockExplorerTemplate)
})

export default BlockExplorerView
