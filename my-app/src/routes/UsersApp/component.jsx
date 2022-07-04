import { Route, Routes } from "react-router-dom";

import UsersHome from "../UsersHome"
import Users from "../Users"
import User from "../Users/User"

const UserApp = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersHome/>}/>
            <Route path="users" element={<Users/>}>
                <Route index element={<User/>}/>
                <Route path=":userId" element={<User/>}/>
            </Route>
            <Route
                path="*"
                element={
                    <main>
                        <p>404! Something went wrong, there is nothing to see :(</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default UserApp;