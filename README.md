# tonal-universe

> :books: Music theory library providing iterable collections of every note, scale and chord in the (NodeJS) universe 

---

`tonal-universe` integrates [`tonal`](https://npmjs.com/tonal) in order to generate and centralize every musical note, scale and chord.

## Install

`npm install --save slurmulon/tonal-universe`

then, either:

```js
// warm / pre-cached module
const music = require('tonal-universe')()
```

or

```js
// lazy module
const music = require('tonal-universe')
```

## Usage

```js
const { notes, scales, chord } = require('tonal-universe')

notes.all()  // [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', ...]
scales.all() // 1530 results
chords.all() // 1853 results
```

## Future

- [ ] Optionally group by root note
- [ ] Configurable octaves
- [ ] Streamed collection
- [ ] Generator collection

## License

MIT
