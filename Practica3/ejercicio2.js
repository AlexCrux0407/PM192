function verificarUsuario(usuario) {
    return new Promise((concede, deniega) => {
            if (usuario === "admin") {
                concede("Usuario verificado");
            } else {
                deniega("Usuario no verificado");
            }
    });}
verificarUsuario("admin")
    .then(res=> console.log(res))
    .catch(err => console.log(err));

verificarUsuario("Ivan")
    .then(res=> console.log(res))
    .catch(err => console.log(err));

