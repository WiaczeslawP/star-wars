import { getIdFromUrl } from './api.utils'

describe('api utils', () => {
  describe('getIdFromUrl', () => {
    it('should return entity id from url', () => {
      expect(getIdFromUrl('https://swapi.dev/api/planets/1/')).toBe('1')
      expect(getIdFromUrl('https://swapi.dev/api/planets/')).toBe('')
    })
  })
})
