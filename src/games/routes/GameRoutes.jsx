import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { ActionPage, DetailPage, RolPage, SearchPage, SimPage } from "../pages";

export const GameRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="action" element={<ActionPage />} />
                    <Route path="rol" element={<RolPage />} />
                    <Route path="sim" element={<SimPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="detail/:id" element={<DetailPage />} />
                    <Route path="/" element={<Navigate to="/action" />} />
                </Routes>
            </div>

        </>
    )
}
