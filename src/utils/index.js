const Rest_Api = process.env.REACT_APP_REST_API

export const fetchRequest = async (username, password, setter) => {
    try {
        const response = await fetch(`${Rest_Api}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        const data = await response.json()
        setter(data.user)
        localStorage.setItem("myToken", data.token)
    } catch (error) {
        console.log(error)
    }
}

export const logIn = async (username, password, setter) => {
    try{
        const response = await fetch("http://localhost:5000/user/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        const data = await response.json()
        setter(data.user)
        localStorage.setItem("myToken", data.token)
    } catch (error) {
        console.log(error)
    }
}

export const tokenLogin = async (setter) => {
    try {
        const token = localStorage.getItem("myToken")
        const response = await fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`},
        })
        const data = await response.json()
        setter(data.user)
    } catch (error) {
        console.log(error)
    }
}