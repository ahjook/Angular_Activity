import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // isActive = false;
  // public fname :string;
  // public enroll: String;
  // public gender: string;
  // public parent: string;
  // public enr : string;
  // public gen : String;
  // public declined : any[]=[];
  // constructor() { }

  ngOnInit() {
  }
  // onClick(){
  //   this.parent = this.fname
  //   if(this.enroll){
  //     this.enr = "yes"
  //   }else{
  //     this.enr = "no"
  //   }
  //   this.gen = this.gender
  // }
  // addDeclineInfo(){
  //   this.declined.push({
  //     name:this.fname,
  //     status:this.enr,
  //     gender:this.gender
  //   });
  // }
  
}
