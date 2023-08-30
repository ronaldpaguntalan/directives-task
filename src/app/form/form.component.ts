import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userName: string = "";
  userEmail: string = "";
  userAddress: string = ""
  userDetailsObj: Array<any> = []

  saveData(){
    if(this.userName && this.userEmail && this.userAddress){
      const newUser = {
        name : this.userName,
        email : this.userEmail,
        address : this.userAddress
      };
      this.userDetailsObj.push(newUser);

      this.userName = "";
      this.userEmail = "";
      this.userAddress = "";
    }
  }

  deleteData(index: number){
    this.userDetailsObj.splice(index, 1)
  }
}
