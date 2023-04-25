export const getIdFromUrl = (url: string = '') => {
  const regex = /\d+/g
  const matches = url.match(regex)

  if (matches) {
    return matches[0]
  }

  return ''
}
