import {createRaw} from "./getUsers.js"

const frg = document.getElementById('button')
const submit = document.getElementById("submit")
const nameUser = document.getElementById('name')
const phoneUser = document.getElementById('phone')
const error = createRaw('div')

function errorLength (input) {
    error.style.color = 'red'
    error.innerText = 'Строка (строки) не могут быть пустыми'
    error.id = 'error'
    input.parentNode.appendChild(error)
}

function errorName (input) {

        error.style.color = 'red'
        error.innerText = 'Name user может содержать только цифры!'
        error.id = 'error'
        input.parentNode.appendChild(error)
}
function errorPhone (input) {

    error.style.color = 'red'
    error.innerText = 'Phone может содержать только цифры!'
    error.id = 'error'
    input.parentNode.appendChild(error)
}

function createForm() {
        const row = table.insertRow(-1);
        const name = row.insertCell(0);
        const phone = row.insertCell(1);
        name.innerHTML = document.getElementById("name").value;
        phone.innerHTML = document.getElementById("phone").value;
        const buttonEd =createRaw('button');
        const buttonDel =createRaw('button');
        const buttonOk = createRaw('button')
        const tdEd = createRaw('td');
        const tdDel = createRaw('td');
            buttonEd.innerText = 'Edit user';
            buttonEd.className = 'btn_ed';
            buttonEd.id = 'ed'
            buttonDel.innerText = 'Delete user';
            buttonDel.id = 'del'
            buttonDel.className = 'btn_del';
            buttonOk.innerText = 'OK'
            row.append(tdEd, tdDel); 
            tdEd.append(buttonEd);
            tdDel.append(buttonDel)
            
}

    export function submitUsers () {
        if ((nameUser.value.length === 0 || phoneUser.value.length === 0) && frg.contains(error) == false) {
            errorLength(submit)
        }
        else if (/\d/.test(nameUser.value) == true) {
            errorName(nameUser)
            if (frg.contains(error) == true) {
                document.getElementById('error').remove()}
        }
        
        else if (/\D/.test(phoneUser.value) == true) {
            errorPhone(phoneUser)
            if (frg.contains(error) == true) {
                document.getElementById('error').remove()}
        }
        
        
        else if (nameUser.value.length != 0 && phoneUser.value.length != 0) {
            
            createForm()
            if (frg.contains(error) == true) {
                document.getElementById('error').remove()}
            
        }
    }
   

