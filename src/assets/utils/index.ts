
export function serialize(params: any) {
  const isArray = (item: any) => item && item.constructor === Array
  const str = []

  for (const item in params) {
    if (isArray(params[item])) {
      for (const subitem in params[item]) {
        str.push(
          `${encodeURIComponent(item)}[]=${encodeURIComponent(params[item][subitem])}`
        )
      }
    } else {
      str.push(
        `${encodeURIComponent(item)}=${encodeURIComponent(params[item])}`
      )
    }
  }
  return str.join('&')
}
