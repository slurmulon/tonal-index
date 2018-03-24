# tonal-index

> :books: Music theory library providing iterable collections of every possible note, scale and chord

---

If you have ever needed to iterate through every possible note, scale, or chord in your music applications then `tonal-index` is the answer.

`tonal-index` uses [`tonal`](https://npmjs.com/tonal) to dynamically generate and aggregate each collection.

## Modes

Because `tonal-index` generates relatively large sets of data it may be loaded in either warm or lazy mode.

- **Warm**: Pre-generates and caches all of the possible combinations
- **Lazy**: Defers generation until the collections are actually needed (default)

## Install

`npm install --save tonal-index`

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

## API

### `all`

- **Types**: `notes`, `scales`, and `chords`
- **Returns**: Every possible combination of `notes`, `scales`, or `chords`

```js
const { notes, scales, chord } = require('tonal-index')

notes.all()  // [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', ...]
scales.all() // 1530 results
chords.all() // 1853 results
```

### `by`

- **Types**: `scales`, `chords`
- **Params**:
  * `key` (`string`): Either `'name'` (also interpreted as "kind")  `'root'` (i.e. the root `note` of the `scale` or `chord`)
- **Returns**: Entire collection filtered by entries matching a `key` and `value`

```js
const { scales, chords } = require('tonal-index')

const majors = scales.by('type', 'major')

const min7 = chords.by('type', 'm7')

```

### Output

You can find the full list of chords and scales in [`test/fixtures/*`](https://github.com/slurmulon/tonal-index/tree/master/test/fixtures)

## Types

### `note`
- Type: `string`
- Format: [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)

### `scale` and `chord`
- Type: `object`
- `type`:
  - Type: `string`
  - Format: [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)
  - Examples: `"+add#9"`, `"m7"`, `"major"`
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
- [ ] Chord voicings
- [ ] Chord inversions
- [ ] Streamed collection
- [ ] Generator collection

## License

MIT
