import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  personList: Array<any> =[];

  constructor(
    private router: ActivatedRoute,
    private service: SampleService
  ) { 

  }
  
  ngOnInit() {
  this.id = this.router.snapshot.params['id']
  return this.service.getId(this.id).subscribe(data => {
  this.personList.push(data)
  })
  }
  
  }
