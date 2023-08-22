import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Root from './pages/Root.jsx'
import HomePage from './pages/HomePage.jsx'
import CustomerPage from './pages/CustomerPage.jsx'
import CustomerNotes from './pages/CustomerNotes'
import CustomerEdit from './pages/CustomerEdit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/customers/:id' element={<CustomerPage />}>
        <Route path='' index={true} element={<CustomerNotes />} />
        <Route path='edit' element={<CustomerEdit />} />
      </Route>
      <Route />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
