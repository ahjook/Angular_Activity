import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-template',
templateUrl: './template.component.html',
styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

// public firstname: string
// public Email: string
// public gender: string
// public list: {}

// public output = false
// public input = true


constructor() { }

ngOnInit() {
}
// onSubmit(){
//     this.list = {
//     tname : this.firstname,
//     temail : this.Email,
//     tgender: this.gender
// }
//     console.log(this.list)
//     this.input=false
//     this.output=true

// }

// edit(){
//     this.input=true
//     this.output=false
// }

}