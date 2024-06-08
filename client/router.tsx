/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './pages/App'
import Layout from './components/Layout'
import PlantDetail from './pages/PlantDetail'
import LeafKey from './pages/LeafKey'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="/leafkey" element={<LeafKey />} />
      <Route path="/leafkey/plant" element={<PlantDetail />} />
    </Route>,
  ),
)

export default router
