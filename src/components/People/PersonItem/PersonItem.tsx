import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { PersonItemProps } from './PersonItem.interface'

const PersonItem = ({ person }: PersonItemProps) => (
  <ListItem>
    <ListItemButton component={Link} to={`/people/${person.id}`}>
      <ListItemText>{person.name}</ListItemText>
    </ListItemButton>
  </ListItem>
)

export default PersonItem
