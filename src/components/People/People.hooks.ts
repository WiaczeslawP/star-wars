import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const usePeopleParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page') || 1)
  const search = searchParams.get('search') || ''

  const setPage = useCallback(
    (page: number) => setSearchParams({ page: `${page}`, search }),
    [search, setSearchParams],
  )
  const setSearch = useCallback(
    (search: string) => setSearchParams({ page: '1', search }),
    [setSearchParams],
  )

  return { page, setPage, search, setSearch }
}
