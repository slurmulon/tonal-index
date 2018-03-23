# tonal-universe

> :books: Music theory library providing iterable collections of every note, scale and chord in the (NodeJS) universe 

---

`tonal-universe` integrates [`tonal`](https://npmjs.com/tonal) in order to generate and centralize every musical note, scale and chord.

## Install

`npm install --save slurmulon/tonal-universe`

then, either:

```js
// pre-warmed / pre-cached module
const warmMusic = require('tonal-universe')()
```

or

```js
// lazy module
const lazyMusic = require('tonal-universe')
```

## Usage

```js
const notes = require('./src/notes').all
const scales = require('./src/scales').all
const chords = require('./src/scales').all

notes()  // [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', ...]
scales() // 1530 results
chords() // 1853 results
```

## Future

- [ ] Optionally group by root note
- [ ] Configurable octaves
- [ ] Streamed collection
- [ ] Generator collection

## License

MIT
