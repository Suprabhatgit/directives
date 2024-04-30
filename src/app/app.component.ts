import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  firstName:string=''
  lastName:string=''
  email:string=''
  address:string=''

  myArray:Array<any>=[]
  // myArray:Array<string>=['1','2','3','4','5']

  // onAdd(){
  //   this.myArray.push('6')
  // }
  // onDelete(index:number){
  //   this.myArray.splice(index,1)
  // }
  onSubmit(){
    this.myArray.push({
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      address:this.address
    })
    console.log(this.myArray)
  }
  onDelete(index:number){
    this.myArray.splice(index,1)
  }
  
}
