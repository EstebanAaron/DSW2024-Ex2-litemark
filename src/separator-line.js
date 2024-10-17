const Component = require('./component')
const Document = require('./document')

class SeparatorLine extends Component {
  separator
  #length
  constructor (separator = '-', length = 40) {
    super()
    this.separator = separator
    this.#length = length
  }

  get length () {
    return this.#length
  }

  print () {
    let text = ''
    for (let index = 0; index < this.#length; index++) {
      text += this.separator
    }

    return text + Document.linebreak
  }
}
module.exports = SeparatorLine
