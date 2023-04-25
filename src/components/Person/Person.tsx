import { IconButton, Paper, Table, TableCell, TableRow, TableBody } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import EditIcon from '@mui/icons-material/Edit'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import EditPersonDialog from './EditPersonDialog'
import { getIdFromUrl } from '../../api/api.utils'
import { useGetPersonQuery, useGetPlanetQuery } from '../../api/starWarsApi'
import Layout from '../Layout'

const Person = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { data: person, isFetching: isPersonFetching } = useGetPersonQuery(
    { id: params.id! },
    { skip: !params.id },
  )
  const planetId = getIdFromUrl(person?.homeworld)
  const { data: planet, isFetching: isPlanetFetching } = useGetPlanetQuery(
    { id: planetId! },
    { skip: !planetId },
  )
  const isFetching = isPersonFetching || isPlanetFetching

  return (
    <Layout
      title={person?.name}
      leftSide={
        <IconButton onClick={() => navigate('/people')} color="inherit">
          <ArrowBackIosNewIcon />
        </IconButton>
      }
      rightSide={
        <IconButton onClick={() => navigate('edit')} color="inherit">
          <EditIcon />
        </IconButton>
      }
      isFetching={isFetching}
    >
      <Routes>
        <Route path="edit" element={<EditPersonDialog />} />
      </Routes>
      <Paper sx={{ maxWidth: 640 }}>
        {person ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell>{person.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Birth year</TableCell>
                <TableCell>{person.birth_year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Eye color</TableCell>
                <TableCell>{person.eye_color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hair color</TableCell>
                <TableCell>{person.hair_color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Height</TableCell>
                <TableCell>{person.height}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mass</TableCell>
                <TableCell>{person.mass}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Skin color</TableCell>
                <TableCell>{person.skin_color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Homeworld</TableCell>
                <TableCell>{planet?.name}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : null}
      </Paper>
    </Layout>
  )
}

export default Person
