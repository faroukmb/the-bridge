
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Add from './pages/Add'
import Update from './pages/Update'
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App