import Blocks from './models/blocks'

function getBlockByHash(hash){
  return Blocks.getBlockByHash(hash)
}



// API
const API = {
  getBlockByHash
}
export default API
