import Node from './Node'

function SymbolNode (name) {
  this.name = name
}

SymbolNode.prototype = Object.create(Node.prototype)

SymbolNode.prototype.type = 'SymbolNode'

export default SymbolNode
