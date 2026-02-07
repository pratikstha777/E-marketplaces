const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export const fetchProducts = async() => {
    try {
    const response = await fetch(`${API_URL}/products/`);
    if(!response.ok) throw new Error("Network response was not ok");
    return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
};

export const loginUser = async(username, password) => {
    const response = await fetch(`${API_URL}token/`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({username, password}),
    });

    if (!response.ok) throw new Error("Invalid username or password");

    const data = await response.json();

    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    return data;
};

export const logoutUser = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/";
}