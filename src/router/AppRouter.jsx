import { Route, Routes } from "react-router-dom";
import { GameRoutes } from '../games';
import { LoginPage } from '../auth';

const AppRouter = () => {
    return (
        <>            
            <Routes>
                <Route path="login" element={<LoginPage />} />    
                <Route path="/*" element={<GameRoutes />} />                
            </Routes>
        </>
    )
}

export default AppRouter
