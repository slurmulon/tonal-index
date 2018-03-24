# tonal-index

> :books: Music theory library providing iterable collections of every possible note, scale and chord

---

`tonal-index` uses [`tonal`](https://npmjs.com/tonal) to generate and centralize every musical note, scale and chord

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

## API

### `note`
- Type: `string`
- Format: [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)

### `scale` and `chord`
- Type: `object`
- `name`:
  - Type: `string`
  - Format: [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)
  - Example: `"+add#9"`
- `root`:
  - Type: `string`
  - Format: [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)
  - Example: `"C"`
- `notes`:
  - Type: `Array<string>`
  - Format: [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)
  - Example: `["C", "E", "G#", "D#"]`



## Future

- [ ] Optionally group by root note
- [ ] Configurable octaves
- [ ] Streamed collection
- [ ] Generator collection

## License

MIT
