const requestURL = 'https://jsonplaceholder.typicode.com/users'
const table = document.getElementById('tbody') 

export function createRaw(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
function editTrue(event) {
    event.target.innerHTML = 'OK'
    event.target.id = 'ok'
    event.target.parentElement.parentElement.childNodes[0].contentEditable = true
    event.target.parentElement.parentElement.childNodes[1].contentEditable = true
}
function editFalse(event) {
    event.target.innerHTML = 'Edit user'
    event.target.id = 'ed'
    event.target.parentElement.parentElement.childNodes[0].contentEditable = false
    event.target.parentElement.parentElement.childNodes[1].contentEditable = false
}
export function delEditUser(event) {
  if (event.target.id === 'del') {  
    event.target.parentElement.parentElement.remove()
  }
  else if (event.target.id === 'ed') {
    editTrue(event)
  }
  else if (event.target.id === 'ok') {
    editFalse(event)
  }
}

export function createTable() {
    fetch(requestURL)
    .then(response => response.json())
    .then(json => {
      const users = json;
      return users.map(user => {
        const tr = createRaw('tr')
        const name = createRaw('td')
        const phone = createRaw('td')
        name.innerHTML = `${user.name}`
        phone.innerHTML = `${user.phone}`
        append(tr, name);
        append(tr, phone);
        append(table, tr);
      
      })
    })
    .then(but => {
       function buttons() {
        const tr = table.querySelectorAll('tr');
        
        Array.from(tr).forEach(function(trArray, index) {
          const name = tr[index].childNodes[0] 
          const phone = tr[index].childNodes[1]
          const buttonEd = createRaw('button');
          const tdEd = createRaw('td');
          buttonEd.innerText = 'Edit user';
          buttonEd.className = 'btn_ed';
          buttonEd.id = 'ed'
          const buttonOk = createRaw('button');
          buttonOk.innerText = 'OK'
          tdEd.append(buttonEd);
          tr[index].append(tdEd); 
        });
        Array.from(tr).forEach(function(trArray, index) {
          const buttonDel = createRaw('button');
          const td = createRaw('td');
          buttonDel.innerText = 'Delete user';
          buttonDel.id = 'del'
          buttonDel.className = 'btn_del';
          td.append(buttonDel);
          tr[index].append(td); 
        });
    }
          buttons()
        
  })
}
