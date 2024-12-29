
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Single from './pages/Single'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='/course/:id' element={<Single/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App