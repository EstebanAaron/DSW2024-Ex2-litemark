const Component = require('./component')
const Text = require('./text')

class Container extends Component {
  #components
  constructor () {
    super()
    this.#components = []
  }

  getComponents () {
    return this.#components
  }

  addComponents (...text) {
    text.forEach(element => {
      if (element instanceof Component) {
        this.#components.push(element)
      }
    })
  }

  countWords () {
    let count = 0
    this.#components.forEach(element => {
      /*     if (element instanceof Container) {
        count = element.countWords()
      } */
      if (true) {
        count += element.countWords()
      }
    })
    return count
  }

  print () {
    let text = ''
    this.#components.forEach(element => {
      if (element instanceof Text) {
        text += element.print()
      }
    })
    return text
  }
}

module.exports = Container
