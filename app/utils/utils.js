export const partial = (fn, ...args) => fn.bind(null, ...args)

const _pipe = (c, j) => (...args) => j(c(...args))

export const pipe = (...fns) => fns.reduce(_pipe)
