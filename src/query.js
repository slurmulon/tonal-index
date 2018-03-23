import { every } from './list'

export class Query {

  constructor (element) {
    this.element = element
  }

  all () {
    return every(this.element)
  }

  by (key, val) {
    return this.all().filter(el => el[key] === value)
  }

}
