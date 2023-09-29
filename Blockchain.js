const { Block } = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block(Date.now().toString())];
    this.difficulty = 2;
    this.blockTime = 30000;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.prevHash = this.getLastBlock().hash;
    block.hash = block.getHash();
    block.mine(this.difficulty);
    this.chain.push(Object.freeze(block));

    this.difficulty +=
      Date.now() - parseInt(this.getLastBlock().timestamp) < this.blockTime
        ? 1
        : -1;
  }

  isValid(blockchain = this) {
    for (let i = 1; i < blockchain.chain.length; i++) {
      const currentBlock = blockchain.chain[i];
      const prevBlock = blockchain.chain[i - 1];

      if (
        currentBlock.hash !== currentBlock.getHash() ||
        prevBlock.hash !== currentBlock.prevHash
      ) {
        return false;
      }
    }

    return true;
  }
}

module.exports = { Blockchain };
