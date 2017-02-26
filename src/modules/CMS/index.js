import Blocks from './models/blocks'

function getBlockByHash(hash){
  return Blocks.getBlockByHash(hash)
}

function getGenesisBlock(){
  return Blocks.getGenesisBlock()
}

function getLatestBlock(){
  return Blocks.getLatestBlock()
}

// API
export default {
  getBlockByHash,
  getGenesisBlock,
  getLatestBlock
}
