import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  // btn_disable:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

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
  

  btn_clicked = () =>{
    if(this.username!==""&&this.password!==""){
    console.log(this.username);
    sessionStorage.setItem('user',this.username);
    console.log(this.password);
    console.log(sessionStorage.getItem('user'));
    this.router.navigateByUrl("/navbar");
    }
    else{
      alert("Please enter login credentials");
    }
    
   
  }

  // loginClicked(){
  //   const name = this.username;
  //   sessionStorage.setItem('user',);    
  // }
}
