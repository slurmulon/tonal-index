import { every } from './list'

export const query = element => ({
  all: ()   => every(element),
  by: (k,v) => every(element).filter(elem => elem[k] === v)
})
