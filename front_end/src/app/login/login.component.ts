import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    email = '';
    password = '';
    
    btnDisabled = false;

    constructor( private socialAuthService: AuthService,  private router: Router, private rest: RestApiService, private data: DataService ) {}
  
    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }else if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      } else if (socialPlatform == "linkedin") {
        socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
      }
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
          // ...
              
        }
      );
    } 

  ngOnInit() {
  }
  
  validate(){
      if(this.email){
          if(this.password){
              return true;
          } else {
              this.data.error('Password is not entered!');
          }
      } else {
          this.data.error('Email is not entered!');
      }
  }
  
  async login(){
      this.btnDisabled = true;
      try{
          if(this.validate()){
              const data = await this.rest.post(
                  'http://localhost:3000/api/accounts/login',
                  {
                      email: this.email,
                      password: this.password
                  }
              );
              
              if (data['success']){
                  localStorage.setItem('token', data['token']);
                  await this.data.getProfile();
                  this.router.navigate(['/']);
              } else {
                  this.data.error(data['message']);
              }
          }
      } catch (error){
          this.data.error(error['message']);
      }
      
      this.btnDisabled = false;
      
  }

}
