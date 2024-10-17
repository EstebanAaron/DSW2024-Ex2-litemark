const Container = require('./container')
const Document = require('./document')
const Text = require('./text')

class List extends Container {
  #bullet
  constructor (bullet = '') {
    super()
    this.#bullet = bullet
  }

  get bullet () {
    return this.#bullet
  }

  getComponents () {
    return super.getComponents()
  }

  addComponents (...textInsert) {
    textInsert.forEach(element => {
      if (element instanceof Text) {
        super.addComponents(element)
      }
    })
  }

  print () {
    let text = ''
    this.getComponents().forEach(element => {
      if (this.#bullet == '') {
        text += element.text + ', '
      } else {
        text += this.#bullet + ' ' + element.print()
        return text
      }
    }
    )
    if (this.#bullet == '') {
      return text.substring(0, text.length - 2) + Document.linebreak
    } else {
      return text
    }
  }
}
module.exports = List
