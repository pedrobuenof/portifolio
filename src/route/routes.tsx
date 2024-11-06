import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/home.tsx';
import Certification from '../pages/Certifications/Certification.tsx';
import Projects from '../pages/Projects/Project.tsx';
import About from '../pages/About/About.tsx';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/certifications' element={<Certification/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    )
}
