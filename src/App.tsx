import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './api/store'
import People from './components/People'
import Person from './components/Person'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/star-wars">
        <Routes>
          <Route path="people" element={<People />} />
          <Route path="people/:id/*" element={<Person />} />
          <Route path="/" element={<Navigate to="people" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
