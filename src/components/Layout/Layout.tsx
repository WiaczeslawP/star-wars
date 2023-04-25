import { AppBar, Toolbar, Grid, Typography, LinearProgress, styled, Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { LayoutProps } from './Layout.interface'

const Layout = ({
  children,
  title,
  leftSide,
  rightSide,
  isFetching,
}: PropsWithChildren<LayoutProps>) => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              {leftSide ? (
                <Grid item sx={{ color: '#fff' }}>
                  {leftSide}
                </Grid>
              ) : null}
              <Grid item>
                <Typography variant="h6">{title}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {rightSide ? <Grid item>{rightSide}</Grid> : null}
        </Grid>
      </Toolbar>
      {isFetching ? <LinearProgress /> : null}
    </AppBar>
    <Offset />
    <Box p={2}>{children}</Box>
  </>
)

export default Layout

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)
