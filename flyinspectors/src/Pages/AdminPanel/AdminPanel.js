import { Route, Routes } from "react-router-dom"
import Dashboard from "../../components/Dashboard/Dashboard"
import { useSelector } from "react-redux";
import Login from "../../components/Dashboard/Login";

const AdminPanel = () => {
    const user = useSelector(state => state.userData)

    return (
        <>
            {user.logedIn ? (
                <Dashboard />
            ) : (
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/*" element={<Login />} />
                </Routes>
            )}
        </>
    )
}

export default AdminPanel