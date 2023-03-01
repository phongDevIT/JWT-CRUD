async function handleSubmitAddUser() {
    try {
        const username = document.getElementById("username").value;

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        const response = await axios.post("auth/admin/user/create", {
            username: username,
            email: email,
            password: password,
            role: role,
        });
        if (response.status === 200) {
            window.location.href = "/admin_page.html";
        }
    } catch (error) {
        console.log("error", error);
    }
}
