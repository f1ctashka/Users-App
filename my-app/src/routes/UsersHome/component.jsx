import { Outlet, Link } from "react-router-dom";

const UsersHome = () => {
    return (
        <div>
            <h1>Users list</h1>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="/users">Users</Link>
                <Link to="/posts"> Posts</Link>
            </nav>
            <Outlet/>
        </div>
    );
}

export default UsersHome;