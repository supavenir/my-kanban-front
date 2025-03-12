
const BASE_API_URL = "http://127.0.0.1:8080";

const API_URL={
    //Routes users
    users: `${BASE_API_URL}/users`,
    user: (id: number) => `${BASE_API_URL}/users/${id}`,
};

export default API_URL;