import { getPaginationTotalPages } from './People.utils'

describe('People', () => {
  describe('getPaginationTotalPages', () => {
    it('should return pagination total pages', () => {
      expect(getPaginationTotalPages(83)).toBe(9)
      expect(getPaginationTotalPages(77)).toBe(8)
      expect(getPaginationTotalPages(0)).toBe(0)
      expect(getPaginationTotalPages(83, 20)).toBe(5)
    })
  })
})
