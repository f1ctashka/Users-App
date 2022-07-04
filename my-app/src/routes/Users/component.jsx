import { NavLink, Outlet } from 'react-router-dom';

import useGetUsers from '../../hooks/useGetUsers';

const Users = () => {

    const users = useGetUsers("https://jsonplaceholder.typicode.com/users/");

    return (
        <div style={{display: "flex"}}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {users.map(({id, name}) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                        to={`/users/${id}`}
                        key={name}
                    >
                        {name}
                    </NavLink>
                ))}
            </nav>
            <Outlet/>
        </div>
    );
}

export default Users;
