import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { peopleApi } from './starWarsApi'

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(peopleApi.middleware),
})

setupListeners(store.dispatch)
