import { Component, OnInit ,Input, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__} from '@angular/core';
import { dataModel } from '../httpModel';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html',
  styleUrls: ['./http-form.component.css']
})
export class HttpFormComponent implements OnInit {
  tobeEdit=true
  public data: dataModel
  public id : number
  public Name:string
  public Email:string
  public Phone:string  
  public EditName:string
  public EditEmail:string
  public EditPhone:string  
  edited:true;
  updatedData:dataModel
  editedInfo:any
  newList:any
  // submit:boolean = true;
 @Input() dataList: Array<dataModel>
  


  constructor( private services: SampleService) { 
    this.data = new dataModel()
  }

  ngOnInit() {
    this.services.fetchData().subscribe(data=>this.dataList=data)
    
  }
 

  onSubmit(sample){
    alert("This is registered")
    this.tobeEdit=true
    this.data = {
      id: this.dataList.length + 1,
      name:this.Name,
      email:this.Email,
      phone:this.Phone,
    }
    this.dataList.push(this.data)
    console.log(this.dataList)
    sample.form.reset()
    // console.log();
    // this.Name = '';
    // this.Email = '';
    // this.Phone = '';
  
  }
  // for parents function :delete function
  deleteData(){
    this.id = null;
    this.Name = null;
    this.Email = null;
    this.Phone = null;
  }

  toUpdate(){
    alert("This is upadated")
    console.log(this.editedInfo)
    for (var i in  this.dataList){
      if(this.dataList[i].id===this.editedInfo.id){
        this.newList = {
          id: this.id,
          name:this.EditName,
          email:this.EditEmail,
          phone:this.EditPhone,
        }
        this.services.updateInfo(this.newList, this.editedInfo.id).subscribe(
          data=>this.dataList[i]=this.newList)
          console.log(this.newList);
      }
      break;

    }
    

  }

  // 
  updateData(editData) {
    this.tobeEdit=false;
    console.log(editData)
    this.id=editData.id,
    this.EditName=editData.name,
    this.EditEmail=editData.email,
    this.EditPhone=editData.phone
    console.log(editData)
  }
  save() {
    this.dataList.forEach(element => {
    if (element.id == this.id) {
      element.name == this.Name,
      element.email == this.Email,
      element.phone == this.Phone
    }
    });
    }

}
