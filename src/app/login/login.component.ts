import { Component, OnInit,Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Userlogin} from '../userlogin.model';
import {ApiServiceService} from '../shared/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  // btn_disable:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,private http:HttpClient,private apiser:ApiServiceService) { }

  ngOnInit(): void {



    const inputs = document.querySelectorAll(".input");


    

    function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
    }
  
    function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
      parent.classList.remove("focus");
    }
  }

  
  
    inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });
  
  // if(this.username===""||this.password===""){
  //   this.btn_disable=true;
  // }
  // else{
  //   this.btn_disable=false;
  // }

  

 
}

loginClicked(form:NgForm){
  const Username = form.value.Username;
  const Password = form.value.Password;
  
  // console.log(Username);
  // console.log(Password);

  const login = {Username : Username , Password:Password}
  console.log(login);

  // this.http.post<{[key:string]:Userlogin}>('http://demo.boardeye.com/ILLicenseKeyAPI/api/Users/LoginUser',login).subscribe(responseData=>{
  //   // console.log(responseData);
  //   if(responseData.token){
  //   sessionStorage.setItem('user', JSON.stringify(responseData));
  //   const user = JSON.parse(sessionStorage.getItem('user'));
  //   console.log(user); 
  //   sessionStorage.setItem('firstname', user.firstName);
  //   sessionStorage.setItem('lastname', user.lastName);
  //   sessionStorage.setItem('username', user.username);
  //   this.router.navigate(['/mainmenu']);
  //   }
  //   else{
  //     alert("login failed");
      
  //   }
  // })




  this.apiser.loginUser(login).subscribe(responseData =>{
      console.log(responseData);
      sessionStorage.setItem('user', JSON.stringify(responseData));
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user); 
        sessionStorage.setItem('firstname', user.firstName);
        sessionStorage.setItem('lastname', user.lastName);
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('id',user.id);
        this.router.navigate(['/mainmenu'])
  },(error)=>{
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Invalid User Credentials',
    })
  })
}

 
  //  toggle=()=>{
  //   let state= false;
  //   if(state){
	// document.getElementById("password").setAttribute("type","password");
	// document.getElementById("eye").style.color='#7a797e';
	// state = false;
  //    }
  //    else{
	// document.getElementById("password").setAttribute("type","text");
	// document.getElementById("eye").style.color='#5887ef';
	// state = true;
  //    }
  //   }
  

  // btn_clicked = () =>{
  //   if(this.username!==""&&this.password!==""){
  //   console.log(this.username);
  //   sessionStorage.setItem('user',this.username);
  //   console.log(this.password);
  //   console.log(sessionStorage.getItem('user'));
  //   this.router.navigateByUrl("/navbar");
  //   }
  //   else{
  //     alert("Please enter login credentials");
  //   }
    
   
  // }

  // loginClicked(){
  //   const name = this.username;
  //   sessionStorage.setItem('user',);    
  // }
}
