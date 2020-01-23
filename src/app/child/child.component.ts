import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(){

  }
  ngOnInit(){
    
  }

         
//   @Input() fname : String;
//   @Input() enroll : String;
//   @Input() gender : String;
//   @Output() childEvent = new EventEmitter();
//   @Output() declineEvent = new EventEmitter();


//    public childMessage: string;
//    people:any[]= [];
//   // decl:any[]=[];
   
 

//    constructor() { }
 
//    ngOnInit() {
//    }
//   decline(){
//      this.childEvent.emit("This application has been declined !");
//      this.declineEvent.emit();
//  }
//  approve(){
//   let peopleToAdd = {
//     name:this.fname,
//     status:this.enroll,
//     gender:this.gender
//   }

//   this.people.push(peopleToAdd)
//   this.childEvent.emit("This application has been approved !")
//  }
 
}
