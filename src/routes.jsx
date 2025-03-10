import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Habilidades from './pages/Habilidades'
import PageBody from './components/PageBody'
import Projetos from './pages/Projetos'

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<PageBody />}>
                    <Route index element={<Home />} />
                    <Route path='/habilidades' element={<Habilidades />} />
                    <Route path='/projetos' element={<Projetos />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
