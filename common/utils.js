export const ssrLog = (p1, p2, p3) => {
  if (!process.server) {
    // will be automatically removed on production build
    if (p2) {
      console.log(p1, p2)
      return
    }

    console.log(p1)
    return
  }

  if (p3) {
    console.info(p1, p2, p3)
    return
  }

  if (p2) {
    console.info(p1, p2)
    return
  }

  console.info(p1)
}
