const BlockModel = Backbone.Model.extend({
  initialize: function(_params){
    this.params = _params.join('/')
  },
  urlRoot: function(){
    return `https://blockchain.info/${this.params}?cors=true`
  }
})


//// PUBLIC

function getBlockByHash(hash){
  return new BlockModel(['rawblock', hash])
}

function getGenesisBlock(){
  const defaultBlockHash = '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' // Genesis Block
  return getBlockByHash(defaultBlockHash)
}

function getLatestBlock(){
  // TODO: Cross Domain Problem with blockchain.info, I'll do when I have my own server running
  // const latestBlockHash = new BlockModel(['latestblock']).fetch().then(block => {
  //   console.log(block)
  // })
  const latestBlockHash = '0000000000000000020880ff47d95ea3940a4d59ca13a1f6e1bff4cc20e893b2' // Today's last block
  return getBlockByHash(latestBlockHash)
}


// API
export default {
  getBlockByHash,
  getGenesisBlock,
  getLatestBlock
}
