async function handleRegister() {
    try {
        const username = document.getElementById("username").value;

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        const response = await axios.post("api/auth/register", {
            username: username,
            email: email,
            password: password,
        });
        if (response.status == 200) {
            window.location.href = "/login.html";
        }
    } catch (error) {
        console.log("error", error);
    }
}

// .then(function (response) {
//     if (response.statusCode == 200) {
//         window.location.href = "/login.html";
//     }
// })
// .catch(function (error) {
//     console.log(error);
// });
