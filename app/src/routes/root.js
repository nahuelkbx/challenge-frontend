
import { Outlet } from "react-router-dom";

import Navbar from '../components/navbar/index'

export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}