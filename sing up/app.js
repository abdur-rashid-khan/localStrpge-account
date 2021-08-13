// dom selector
const sinFrom=document.querySelector('#sinup');
const userName=sinFrom['name'];
const userEmail=sinFrom['email'];
const userPassword=sinFrom['password'];
const userInfoDiv=document.querySelector('#userInfo');
const tabble=document.querySelector('.table');
// start coding
const userInfo=JSON.parse(localStorage.getItem('userInfo'))||[];
const addUserInfo=(name,email,password)=>{
   userInfo.push({ 
      name,
      email,
      password,
   });
   localStorage.setItem('userInfo',JSON.stringify(userInfo));
   return{
      name,
      email,
      password,
   }
}
const creeatElement=({name,email,password})=>{
   const newRow=document.createElement('tr');
   const newName=document.createElement('th');
   newName.innerText=name;
   newRow.appendChild(newName);
   const newEmail=document.createElement('th');
   newEmail.innerText=email;
   newRow.appendChild(newEmail);
   const newPassword=document.createElement('th');
   newPassword.innerText=password;
   newRow.appendChild(newPassword);
   userInfoDiv.appendChild(newRow);
   tabble.style.visibility=userInfo.length===0 ? "hidden" : "visible";
}
tabble.style.visibility=userInfo.length===0 ? "hidden" : "visible";
userInfo.forEach(creeatElement);
sinFrom.onsubmit=e=>{
   e.preventDefault(); 
   newUser=addUserInfo(
      userName.value,
      userEmail.value,
      userPassword.value,
   );
   creeatElement(newUser);
   userName.value=''
      userEmail.value=''
      userPassword.value=''
}