function verificarPasswords(event) {
 
    console.log(event);
    if (pass1.value !== pass2.value) {
        error.classList.remove("hide");
        error.classList.add("show");
        pass1.style.setProperty("border", "thin solid var(--error)");
        pass2.style.setProperty("border", "thin solid var(--error)");
        return

    } else {
        error.classList.remove("show");
        error.classList.add("hide");
        pass1.style.setProperty("border", "thin solid var(--ok)");
        pass2.style.setProperty("border", "thin solid var(--ok)");
        singup.disabled = true;
 
        setTimeout(function() {
            location.reload();
        }, 1000);
        return
    }
}

let singup = document.getElementById ("singup")
let error = document.getElementById("error")
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
singup.addEventListener ("click", verificarPasswords)