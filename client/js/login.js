async function handleLogin() {
    const password = document.getElementById("password").value;

    const email = document.getElementById("email").value;

    const response = await axios.post("api/auth/login", {
        email: email,
        password: password,
    });
    if (response.status == 200) {
        const accessToken = response.data.accessToken;

        // lay ra thong tin payload
        const payloadDecoded = jwt_decode(accessToken);
        if (payloadDecoded.role === "regular") {
            window.location.href = "/home_page.html";
        } else {
            window.location.href = "/admin_page.html";
        }

        // save token den client
        localStorage.setItem("access_token", accessToken);
    }
}
