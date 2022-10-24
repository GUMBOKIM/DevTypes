import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PageInfo from "./pages/PageInfo";
import PageLayout from "./layout/PageLayout";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout/>}>
                    {PageInfo.map(page => <Route key={page.kind} path={page.route} element={page.page}/>)}
                    <Route path="*" element={<Navigate to="/home" replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
