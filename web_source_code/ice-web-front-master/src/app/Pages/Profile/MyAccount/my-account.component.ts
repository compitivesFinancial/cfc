import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Shared/Services/login.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  first_name:string="";
  last_name:string="";
  email:string="";
  mobile_number:string="";
  country_code: string=""; 
  subscriptions:Subscription[]=[]
  user_data:any={};
  old_password:any= ''
  new_password:any=''
  encrypt:any
  encryptVoid:any
  loader:boolean = false
  constructor(private loginService:LoginService, public toast:ToastrService) { 
    const user_data=btoa(btoa("user_info_web"));
    if(localStorage.getItem(user_data) != undefined){
      this.user_data=JSON.parse(atob(atob(localStorage.getItem(user_data) || '{}')));
    }
  }

  ngOnInit(): void {
    if(this.user_data.role_type == 2){
      this.getProfileDetails(1);
     
    }
   this.getProfileDetails();
  
    
  }


  getProfileDetails(type?:number){
    const data={id:this.user_data.id}
    this.subscriptions.push(this.loginService.getProfileDetails(data,type).subscribe((res:any)=>{
      if(res.status){
        // this.loader = true
        this.first_name=res.response.name;
        // this.last_name=res.response.last_name;
        this.email=res.response.email;
        this.mobile_number=res.response.country_code+res.response.mobile_number;
      }
      
    }))
    
  }

  updateProfile(){
    let data = {
      'id':this.user_data.id,
      'email':this.email,
      'mobile_number':this.mobile_number
    }
    this.loginService.profileEdit(data).subscribe((res:any)=>{
      this.toast.success(res.response)
      this.ngOnInit()
    })
  }

  changePassword(){
    let data= {
      'id':this.user_data.id,
      'old_password':this.loginService.encryptPassword(this.old_password),
      'password':this.loginService.encryptPassword(this.new_password)
    }
    this.loginService.changePassword(data).subscribe((res:any)=>{
      if(res.status== true){
      this.toast.success(res.response)
      this.ngOnInit()
      }
      if(res.status == true){
        this.toast.warning(res.response)
        this.ngOnInit()
      }
    })
  }

}
