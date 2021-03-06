import basePickBy from './base/basePickBy'
import hasKeyIn from './util/hasKeyIn'

export default function pick(data, maybePath) {
  if (data == null) {
    return {}
  }

  return basePickBy(data, maybePath, function (value, path) {
    return hasKeyIn(data, path)
  })
}
