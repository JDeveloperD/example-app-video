
const addQueryToUri = (
  { uri, query }: {uri: string, query: any}
) => {
  let str = ''
  for (const property in query) {
    if (query[property] !== '' && query[property] !== undefined) {
      if (str === '') {
        str += '?'
      } else {
        str += '&'
      }

      let value = query[property]

      if (typeof value === 'string') {
        value = query[property].replace(/ /g, '%20')
      }

      str += `${property}=${value}`
    }
  }

  return uri + str
}

export default addQueryToUri
