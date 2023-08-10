function validationForm() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;
    let validationDirector = document.forms["register"]["director"].value;
    let validationDate = document.forms["register"]["date"].value;
    let validationActor = document.forms["register"]["actor"].value;
    let validationNota = document.forms["register"]["nota"].value;
    let validationRadio = document.forms["register"]["radio"].value;

    if (validationCod ==""){
        alert("O código deve ser preenchido.");
        return false;
    }
    if (validationTitle ==""){
        alert("O titulo deve ser preenchido.");
        return false;
    }if (validationDirector ==""){
        alert("O diretor deve ser preenchido.");
        return false;
    }if (validationDate ==""){
        alert("A data deve ser preenchido.");
        return false;
    }if (validationActor ==""){
        alert("O nome do ator deve ser preenchido.");
        return false;
    }if (validationNota ==""){
        alert("A nota deve ser preenchida.");
        return false;
    }if (validationRadio==""){
        alert("O gênero deve ser preenchido.");
        return false;
    }
}
function insert(){
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let director = document.forms["register"]["director"].value;
    let date = document.forms["register"]["date"].value;
    let actor = document.forms["register"]["actor"].value;
    let nota = document.forms["register"]["nota"].value;
    let radio = document.forms["register"]["radio"].value;

    let insert = window.document.getElementById("insertRow");
    insert.innerHTML =  
    `<th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${actor}</td>
    <td>${nota}</td>
    <td>${radio}</td>
    `;
}
