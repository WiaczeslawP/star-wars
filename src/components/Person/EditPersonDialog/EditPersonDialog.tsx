import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import EditPersonDialogForm from './EditPersonDialogForm'
import { useGetPersonQuery } from '../../../api/starWarsApi'

const EditPersonDialog = () => {
  const params = useParams()
  const navigate = useNavigate()
  const handleClose = () => navigate('..')
  const { data, isFetching } = useGetPersonQuery({ id: params.id! }, { skip: !params.id })

  return (
    <Dialog open onClose={handleClose}>
      {isFetching || !data ? null : (
        <>
          <DialogTitle>Edit person</DialogTitle>
          <DialogContent>
            <EditPersonDialogForm person={data} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}

export default EditPersonDialog
