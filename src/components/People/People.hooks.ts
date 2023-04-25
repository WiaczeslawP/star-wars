import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const usePeopleParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page') || 1)
  const search = searchParams.get('search') || ''

  const setPage = useCallback(
    (page: number) => setSearchParams({ page: `${page}` }),
    [setSearchParams],
  )
  const setSearch = useCallback(
    (search: string) => setSearchParams({ search, page: '1' }),
    [setSearchParams],
  )

  return { page, setPage, search, setSearch }
}
