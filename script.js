function contar() {
    let txtini = document.querySelector("#txtini")
    let txtfim = document.querySelector("#txtfim")
    let txtpas = document.querySelector("#txtpas")
    let res = document.querySelector("#res")
    let i = Number(txtini.value)
    let f = Number(txtfim.value)
    let p = Number(txtpas.value)

    if (i == 0 || f==0 || p<=0) {
        alert("[ERRO] Alguma númeração está incorreta!")
    } else if (i<f) {
        //Contagem crescente
        res.innerHTML = "Contagem: "
        while (i<=f) {
            res.innerHTML += ` ${i}\u{1F449}`
            i += p
        }
        res.innerHTML += `\u{1F3C1}`
    } else {
        //Contagem regressiva
        res.innerHTML = "Contagem: "
        while (f<=i) {
            res.innerHTML += ` ${i} \u{1F449}`
            i -= p
        }
        res.innerHTML += `\u{1F3C1}`
    }   
    } 

