// back to Top button
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Login Validation
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == 'admin' && senha == '123456') {
        window.location = "index.html";
        logado = 1;
    }

    if (!logado) {
        alert("Acesso Negado. Dados Incorretos!!")
    }
}

// alert on the register button
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html"
}