import { Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { EditPersonDialogFormProps } from './EditPersonDialogForm.interface'
import { StarWarsPerson } from '../../../../api/starWarsApi.interface'

const EditPersonDialogForm = ({ person }: EditPersonDialogFormProps) => {
  const { register } = useForm<StarWarsPerson>({
    defaultValues: person,
  })

  return (
    <Stack spacing={2}>
      <TextField variant="standard" inputProps={register('name')} label="Name" />
      <Stack direction="row" spacing={2}>
        <TextField variant="standard" inputProps={register('birth_year')} label="Birth year" />
        <TextField variant="standard" inputProps={register('gender')} label="Gender" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField variant="standard" inputProps={register('eye_color')} label="Eye color" />
        <TextField variant="standard" inputProps={register('hair_color')} label="Hair color" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField variant="standard" inputProps={register('mass')} label="Mass" />
        <TextField variant="standard" inputProps={register('height')} label="Height" />
      </Stack>
    </Stack>
  )
}

export default EditPersonDialogForm
