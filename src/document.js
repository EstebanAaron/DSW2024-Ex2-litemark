const Component = require('./component')

class Document {
  title
  #author
  #date
  constructor (title, author = 'Anónimo') {
    this.title = title

    this.author = author
    if (this.#author == undefined) {
      this.#author = 'Anónimo'
    }

    this.#date = new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'full'
    }).format(new Date())
  }

  static linebreak (linebreaks = '\n') {
    return linebreaks
  }

  get author () {
    return this.#author
  }

  set author (autor) {
    autor = autor.trim()
    if (autor.length > 3) {
      this.#author = autor
    }
  }

  get date () {
    return this.#date
  }

  print () {
    return 'Título: ' + this.title + Document.linebreak + 'Autor: ' + this.#author + Document.linebreak + 'Fecha: ' + this.#date + Document.linebreak
  }
}
module.exports = Document
