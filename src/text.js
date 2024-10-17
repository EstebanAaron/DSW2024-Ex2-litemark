const Component = require('./component')
const Document = require('./document')

class Text extends Component {
  text
  constructor (text = '') {
    super()
    this.text = text
  }

  print () {
    return this.text + Document.linebreak
  }

  countWords () {
    const partes = this.text.split(' ')
    return partes.filter(part => part.trim() !== '').length
  }
}
module.exports = Text
