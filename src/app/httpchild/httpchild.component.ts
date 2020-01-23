import { Component, OnInit ,Input, Output , EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleService } from '../sample.service';
import { dataModel } from '../httpModel';
// import swal from 'sweetalert2'

@Component({
  selector: 'app-httpchild',
  templateUrl: './httpchild.component.html',
  styleUrls: ['./httpchild.component.css']
})
export class HttpchildComponent implements OnInit {

  Name:string;
  Email:string;
  Phone:string;
  @Input() dataList: Array<dataModel>;
  @Output() editEvent = new EventEmitter<dataModel>();
  @Output() deleteEvent = new EventEmitter<dataModel>();  
  public apiUrl:"https://jsonplaceholder.typicode.com/users";

  constructor(private service: SampleService) {
  }

  ngOnInit() {
  }


  // del function using http
  onDelete(deleteData) {
    console.log(deleteData)
    console.log("this data is deleted")
    alert("This data is deleted")
    this.service.delData(deleteData.id).subscribe(data => {
      (this.dataList.splice(this.dataList.indexOf(deleteData), 1));
    })
  }

  //update function
  onUpdate(updateData){
    this.editEvent.emit(updateData)
    console.log(updateData)
    console.log("Editing section")
  }

    //del function not using http
  //   onDelete(deleteData){
  //     // swal.fire
  //     for (var i = 0; i < this.dataList.length; i++) {
  //       if (deleteData == this.dataList[i]) {
  //       this.dataList.splice(i, 1)
  //       console.log(this.dataList)
  //       // this.storage.length-1
  //       }
  
  // }
  // }

  









}
