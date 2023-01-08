import Node from './Node';

function BlockNode (blocks) {
  this.blocks = blocks
}

BlockNode.prototype = Object.create(Node.prototype)

BlockNode.prototype.type = 'BlockNode'

export default BlockNode
