import {Routes, Route} from 'react-router-dom';
import HomePages from './pages/Home/home.tsx';
import CertificationPages from './pages/Certifications/Certification.tsx';
import AboutPages from './pages/About/About.tsx';
import ProjectsPages from './pages/Projects/Project.tsx';

export default function AppRoutes(){
    return (
        // Aqui vem a tag de animações do framemotion - animação para transição de páginas/rotas
        <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/certifications' element={<CertificationPages/>}/>
            <Route path='/about' element={<AboutPages/>}/>
            <Route path='/projects' element={<ProjectsPages/>}/>
        </Routes>
    )
}
