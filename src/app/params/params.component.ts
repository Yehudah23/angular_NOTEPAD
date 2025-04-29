import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  imports: [FormsModule,CommonModule],
  templateUrl: './params.component.html',
  styleUrl: './params.component.css'
})
export class ParamsComponent {
  constructor( public actroute:ActivatedRoute){}
  theme=''
  topic=''
  notes:any[]=[];

 ngOnInit(){
  let actr=this.actroute
  console.log(actr.snapshot.params['id'])
 }
}
