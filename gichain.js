const { Block } = require("./Block");
const { Blockchain } = require("./Blockchain");

const giChain = new Blockchain();
giChain.addBlock(new Block(Date.now().toString(), ["Hello Agis"]));
giChain.addBlock(new Block(Date.now().toString(), ["Hello Agis"]));
giChain.addBlock(new Block(Date.now().toString(), ["Hello Agis"]));

console.log(giChain.chain);
