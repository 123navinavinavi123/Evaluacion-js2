document.addEventListener("DOMContentLoaded", () => {
    const btnIngresar = document.querySelector("button");
    const divErrores = document.getElementById("errores");

  
    const USUARIO_VALIDO = "ivan.morales";
    const PASSWORD_VALIDO = "JS2026IM10";

    btnIngresar.addEventListener("click", () => {
        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value.trim();
        let errores = [];

        
        if (usuario === "" || password === "") {
            errores.push("Todos los campos son obligatorios.");
        } else if (usuario !== USUARIO_VALIDO || password !== PASSWORD_VALIDO) {
            // Validar credenciales
            errores.push("Usuario o contraseña incorrectos.");
        }

        
        if (errores.length > 0) {
            divErrores.innerHTML = `<ul>${errores.map(error => `<li>${error}</li>`).join('')}</ul>`;
        } else {
            divErrores.innerHTML = "";
            
            
            localStorage.setItem("sesionActiva", "true");
            localStorage.setItem("usuarioLogueado", usuario);
            window.location.href = "formulario.html";
        }
    });
});