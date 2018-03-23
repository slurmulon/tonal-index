import { every } from './list'

export const query = element => ({
  all: ()   => every(element),
  by: (k,v) => every(element).filter(el => el[k] === v)
})
