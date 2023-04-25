const itemsPerPage = 10

export const getPaginationTotalPages = (totalItems: number = 0, perPage: number = itemsPerPage) =>
  Math.ceil(totalItems / perPage)
