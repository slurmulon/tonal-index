# tonal-index

> :books: Music theory library providing iterable collections of every possible note, scale and chord

---

`tonal-index` integrates [`tonal`](https://npmjs.com/tonal) in order to generate and centralize every musical note, scale and chord.

## Install

`npm install --save slurmulon/tonal-index`

then, either:

```js
// warm / pre-cached module
const music = require('tonal-index')()
```

or

```js
// lazy module
const music = require('tonal-index')
```

## Usage

```js
const { notes, scales, chord } = require('tonal-index')

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
