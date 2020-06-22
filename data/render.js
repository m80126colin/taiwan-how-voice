const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const normalisePath = (...args) => path.normalize(path.join(...args))

const attributeToObject = items => {
  const attrs = _.chain(items)
    .map((item, index) => {
      const attr = _.trim(item)
      if (index === 0)
        return ['id', attr]
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
    song: _.head(attrs.song) || '',
    credit: attrs.credit || [],
    tag: attrs.tag || []
  }
}

const renderDatetime = async list => {}

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
  const datetime = await renderDatetime(list)
  // merge data into an object
  // write result
  const outputFile = normalisePath(__dirname, '..', 'public', 'videos.json')
  await fs.promises.writeFile(outputFile, JSON.stringify(result), 'utf-8')
  console.log(_.drop(result, result.length - 30))
}

renderer()