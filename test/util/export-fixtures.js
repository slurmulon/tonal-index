const { notes, scales, chords } = require('../../src/index')
const fs = require('fs')

fs.writeFileSync('test/fixtures/notes.json', JSON.stringify(notes.all(),   null, 2))
fs.writeFileSync('test/fixtures/scales.json', JSON.stringify(scales.all(), null, 2))
fs.writeFileSync('test/fixtures/chords.json', JSON.stringify(chords.all(), null, 2))
