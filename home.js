import {onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth , db } from "./config.js";

import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 



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
  
  

  btn.addEventListener('click', async(event)=>{
    console.log(auth.currentUser.uid);


    try {
      const docRef = await addDoc(collection(db, "expenses"), {
       name:expenses.value,
       uid:auth.currentUser.uid

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    
    // arr.push(expenses.value)
    
    // // console.log(arr);
    // render()
    expenses.value='';  
    getDataFromFirestore();

  })

  

  async function getDataFromFirestore() {
    const arr=[]
    const querySnapshot = await getDocs(collection(db, "expenses"));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data())
    });
    
    console.log(arr);
    arr.map((item)=>{
      ol.innerHTML+=`
         <li>
         ${item.name}
         <button  id="delete" type="button" class="delete-btn app-button btn btn-outline-danger">Delete</button>
        <button id="edit"  type="button" class="edit-btn app-button btn btn-outline-success">Edit</button>
         </li>
         `

    })
 }



  
//   function render() {
//     ol.innerHTML=''

//  for (let i = 0; i < arr.length; i++) {
//    ol.innerHTML+=`
//    <li>
//    ${arr[i]}
//    <button  id="delete" type="button" class="delete-btn app-button btn btn-outline-danger">Delete</button>
//   <button id="edit"  type="button" class="edit-btn app-button btn btn-outline-success">Edit</button>
//    </li>
//    `
  
//  } 
//   }

//   const btnDelete = document.querySelectorAll('.delete')
//   const btnEdit = document.querySelectorAll('.edit')

// btnDelete.addEventListener('click',()=>{
//   console.log('delete');

// })

// btnEdit.addEventListener('click',()=>{
//   console.log('edit');
// })
