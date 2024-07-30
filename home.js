import {onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
   window.location= 'index.html'
    }
  });
  

  const logout = document.querySelector('#logout')

  logout.addEventListener( 'click',()=>{
    signOut(auth).then(() => {
    
        console.log('Sign-out successful.');
        window.location='index.html'
      }).catch((error) => {
   console.log(error);
    });
  })






  const ol = document.querySelector('ol')
  const expenses = document.querySelector('#expenses')
  const btn = document.querySelector('#add-btn')

  let arr=[];

  btn.addEventListener('click',()=>{

    arr.push(expenses.value)

    // console.log(arr);
    render()
    expenses.value=''

  })




  
  function render() {
    ol.innerHTML=''

 for (let i = 0; i < arr.length; i++) {
   ol.innerHTML+=`
   <li>
   ${arr[i]}
   <button  id="delete" type="button" class="delete-btn app-button btn btn-outline-danger">Delete</button>
  <button id="edit"  type="button" class="edit-btn app-button btn btn-outline-success">Edit</button>
   </li>
   `
  
 } 
  }

  const btnDelete = document.querySelectorAll('.delete')
  const btnEdit = document.querySelectorAll('.edit')

btnDelete.addEventListener('click',()=>{
  console.log('delete');

})

btnEdit.addEventListener('click',()=>{
  console.log('edit');
})
