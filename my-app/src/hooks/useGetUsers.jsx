import { useState, useEffect } from "react";

const useGetUsers = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
        .then((response) => {
          if (response.status === 404) {
            return 404
          } else {
            return response.json()
          }
        })
        .then((json) => setData(json));
  }, [url])

  return data;
}

export default useGetUsers;
