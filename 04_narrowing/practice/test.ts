function processData(data: unknown) {
  if (typeof data === 'string') {
    return `Hello, ${data}`
  } else if (typeof data === 'number') {
    return `Age: ${data}`
  } else {
    throw new Error('Invalid data')
  }
}