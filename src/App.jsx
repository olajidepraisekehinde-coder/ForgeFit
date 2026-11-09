import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './Layouts/sharedLayout'
import { SkeletonBlock, SkeletonText } from './component/skeleton'

const Home = lazy(() => import('./pages/home'))
const Rooms = lazy(() => import('./pages/rooms'))
const Services = lazy(() => import('./pages/services'))
const Booking = lazy(() => import('./pages/booking'))
const Contact = lazy(() => import('./pages/contact'))
const About = lazy(() => import('./pages/about'))
const RoomDetails = lazy(() => import('./pages/roomDetails'))
const NotFound = lazy(() => import('./pages/notFound'))
const Founder = lazy(() => import('./pages/founder'))

// function ScrollToTop() {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     return null;
// }

function App() {

    return (
        <>
            <BrowserRouter>
                {/* <ScrollToTop /> */}
                <Suspense
                    fallback={
                        <div className="flex min-h-screen items-center justify-center bg-[#f5f1eb] px-6 py-10">
                            <div className="w-full max-w-6xl space-y-8">
                                <SkeletonBlock className="h-[72vh] w-full rounded-none" />
                                <div className="space-y-4 text-center">
                                    <SkeletonText className="mx-auto h-10 w-72" />
                                    <SkeletonText className="mx-auto h-4 w-3/4" />
                                    <SkeletonText className="mx-auto h-4 w-2/3" />
                                </div>
                            </div>
                        </div>
                    }>
                    <Routes>
                        <Route element={<SharedLayout />}>
                            <Route index element={<Home />} />
                            <Route path="room" element={<Rooms />} />
                            <Route path="service" element={<Services />} />
                            <Route path="/booking" element={<Booking />} />
                            {/* <Route path="/booking/:slug" element={<Booking />} /> */}
                            <Route path="contact" element={<Contact />} />
                            <Route path="about" element={<About />} />
                            <Route path="/room/:slug" element={<RoomDetails />} />
                            <Route path="founder" element={<Founder />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default App
