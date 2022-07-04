import { Link, useParams } from "react-router-dom";

import useGetUsers from "../../../hooks/useGetUsers";

import "./styles.css"

const User = () => {
    const { userId } = useParams();

    const user = useGetUsers("https://jsonplaceholder.typicode.com/users/" + userId)

    if(!userId) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>Please, select a user.</p>
            </main>
        )
    } else if (user === 404) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>404, not found!</p>
            </main>
        )
    }

    return (
        <main className="container">
            <div className="template">
                <h1>Name: {user.name}</h1>
                <h2>Username: {user.username}</h2>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
                <Link to="/users">Back to users</Link>
            </div>
        </main>
    );
}

export default User;
