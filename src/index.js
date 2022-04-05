import './style.scss'
import {createTable} from './getUsers.js'
import {submitUsers} from './submitUsers.js'
import {delEditUser} from './getUsers.js'
createTable()  
submit.addEventListener('click', submitUsers)
table.addEventListener('click', delEditUser)