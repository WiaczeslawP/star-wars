import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/The Star Wars People/i)
  expect(linkElement).toBeInTheDocument()
})
