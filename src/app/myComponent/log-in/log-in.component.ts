import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { last } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [NgIf ,FormsModule,], 
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent  {

// for valdation

signupUsers:any[]=[];

signupObj:any={
  Firstname:'',
  lastname:'',
  email:'',
  password:''
};

loginObj:any={
    email:'',
  password:''
}

constructor(private router:Router){
}

ngOnInit(): void{
  const localData = localStorage.getItem ('signupUsers');
  if (localData != null){
    this.signupUsers =JSON.parse(localData)
  }


  // const SubData = localStorage.getItem('SubscribeUser');
  // if (SubData != null){
  //   this.signupUsers =JSON.parse(SubData)
  // }


}

onsginup(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
  this.signupObj={
    Firstname:'',
    lastname:'',
    email:'',
    password:''
  };
  alert('Hi ' + this.signupUsers[this.signupUsers.length - 1].Firstname + '!');
  this.router.navigateByUrl('/home')

}
onlogin(){
  // debugger
  const isUserExist = this.signupUsers.find(m=> m.Email == this.loginObj.Email && m.password ==this.loginObj.password);
  if(isUserExist !=undefined){
    alert('Hi ' + this.signupUsers[this.signupUsers.length - 1].Firstname + '!');
    this.router.navigateByUrl('/home')
  }else{
    alert('wrong credentials');
  }
}

  
// for swwitching
  showLogin: boolean = true;

  toggleForm() {
    this.showLogin = !this.showLogin; 
  }

  goToSignUp() {
    this.showLogin = false;
  }



  // for Subscribe
  SubscribeUser:any[]=[];
  SubscribeObj:any={
    mail:''
  }

  onSubscribe(){

      // Check if the email already exists
      const ismailExist = this.SubscribeUser.find(m => m.mail === this.SubscribeObj.mail);
    
      if (ismailExist) {
        alert('Email already subscribed');
      } else {
        // Add the email to the subscription list
        this.SubscribeUser.push(this.SubscribeObj);
        
        // Store updated subscription list in localStorage
        localStorage.setItem('SubscribeUser', JSON.stringify(this.SubscribeUser));
    
        alert('Successfully subscribed');
        this.router.navigateByUrl('/home');
        
        // Reset the SubscribeObj
        this.SubscribeObj = {
          mail: ''
        };
  }
}
}