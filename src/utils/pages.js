export const getPageCount = (totalPage, limit) => {
  return (Math.ceil(totalPage / limit))
}

export const getPagesArray = (totalPage) => {
  let result = []
  for (let i = 0; i < totalPage; i++) {
    result.push(i + 1)
  }
  return result;
}