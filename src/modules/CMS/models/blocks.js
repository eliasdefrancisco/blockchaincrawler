


function getBlockByHash(hash){
  const BlockModel = Backbone.Model.extend({
    // blockHash default == Genesis Block
    blockHash: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
    urlRoot: function(){
      return `https://blockchain.info/rawblock/${this.blockHash}?cors=true`
    }
  })


  const params = {}
  if(hash) params.blockHash = hash
  const block = new BlockModel(params)
  return block
}



// API
const API = {
  getBlockByHash
}
export default API
