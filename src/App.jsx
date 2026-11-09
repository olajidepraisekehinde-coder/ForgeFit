import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Program = lazy(() => import('./pages/program'))
const Membership = lazy(() => import('./pages/membership'))
const Trainers = lazy(() => import('./pages/trainers'))
const Contact = lazy(() => import('./pages/contact'))
const Gallery = lazy(() => import('./pages/gallery'))

import { lazy, Suspense, } from 'react'
import { useTheme } from './utilis/useTheme'
import SharedLayout from './sharedLayout/layout'
import Loading from './Loading/loading'

function App() {
  const { darkMode } = useTheme()
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#121212] text-white" : "bg-[#FDF6EC] text-[#1C1B1B]"}`}>
        <Suspense fallback={<Loading />} >

          {/* <Navbar setIsOpen={setIsOpen} />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

          <Routes>
            <Route element={<SharedLayout />}>
              <Route index element={<Home />} />  {/* index means default child route */}
              <Route path="about" element={<About />} />
              <Route path="program" element={<Program />} />
              <Route path="membership" element={<Membership />} />
              <Route path="trainers" element={<Trainers />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Routes>
        
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
