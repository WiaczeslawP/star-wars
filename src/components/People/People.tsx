import { Grid, List, Pagination, Paper } from '@mui/material'
import Person from './PersonItem'
import { usePeopleParams } from './People.hooks'
import SearchInput from './SearchInput'
import { useGetPeopleQuery } from '../../api/starWarsApi'
import Layout from '../Layout'

const People = () => {
  const { page, setPage, search, setSearch } = usePeopleParams()
  const { data, isFetching } = useGetPeopleQuery({ page, search })

  return (
    <Layout
      title="The Star Wars People"
      rightSide={<SearchInput value={search} onChange={value => setSearch(value)} />}
      isFetching={isFetching}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Pagination
            page={page}
            onChange={(event, page) => setPage(page)}
            count={Math.ceil((data?.count ?? 0) / 10)}
          />
        </Grid>
        <Grid item>
          {data ? (
            <Paper>
              <List dense>
                {data.results.map(person => (
                  <Person person={person} key={person.name} />
                ))}
              </List>
            </Paper>
          ) : null}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default People
