const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')

const normalisePath = (...args) => path.normalize(path.join(...args))

const attributeToObject = items => {
  const attrs = _.chain(items)
    .map((item, index) => {
      const attr = _.trim(item)
      if (index === 0)
        return ['id', attr]
      if (index === 1)
        return ['date', attr]
      if (index === 2)
        return ['title', attr]
      if (attr === '')
        return undefined
      if (attr[0] === '@')
        return ['credit', attr.substr(1)]
      if (attr[0] === '#')
        return ['tag', attr.substr(1)]
      return ['song', attr]
    })
    .compact()
    .groupBy(0)
    .mapValues(pairs => _.map(pairs, 1))
    .value()
  return {
    id: _.head(attrs.id),
    date: _.head(attrs.date),
    title: _.head(attrs.title),
    song: _.head(attrs.song) || '',
    credit: attrs.credit || [],
    tag: attrs.tag || []
  }
}

const basicToObject = rows => _.chain(rows)
  .map(row => {
    console.log('row', row)
    if (row.length < 2)
      return undefined
    return [ row[0], {
      date: row[1],
      title: row[2]
    } ]
  })
  .compact()
  .fromPairs()
  .value()

const renderBasic = async list => {
  // basic.txt
  const file = normalisePath(__dirname, 'basic.txt')
  // load basic.txt
  const data = fs.promises.readFile(file, 'utf-8')
  const lookup = _.chain(data)
    .split(/\r?\n/)
    .map(line => _.split(line, '\t'))
    .thru(basicToObject)
    .value()
  console.log(lookup, 'lookup')
  return lookup
}

const renderer = async () => {
  // load video list
  const data = await fs.promises.readFile(normalisePath(__dirname, 'videos.txt'), 'utf-8')
  const list = _.chain(data)
    .split(/\r?\n/)
    .map(line => _.chain(line)
      .split(/\t/)
      .thru(attributeToObject)
      .value())
    .value()
  const basic = await renderBasic(list)
  // merge data into an object
  const result = list
  // write result
  const outputFile = normalisePath(__dirname, '..', 'public', 'videos.json')
  await fs.promises.writeFile(outputFile, JSON.stringify(result), 'utf-8')
  console.log(_.drop(result, result.length - 30))
}

renderer()