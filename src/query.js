import { every } from './list'

export const query = element => {
  const collection = {
    all: () => every(element),

    by: (key, value) => collection.all().filter(el => el[key] === value)
  }

  return collection
}
