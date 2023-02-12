import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myValidator } from '../shared/validator/maxvalue.validator';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  public form: FormGroup | any;
  dataArr:any;
  chartOptions:any;
 
  constructor( private fb: FormBuilder) {
    this.form= this.fb.group({
      val1:['',[Validators.required , myValidator.maxNum]],
      val2:['',[Validators.required , myValidator.maxNum]]
    })
  }

  ngOnInit(){}
  
  submitVal():void{
  if(this.form.valid){
    let val1= +this.form.value.val1;
    let val2 = +this.form.value.val2;
    
    this.dataArr={
      labels: ['A', 'B'],
      datasets: [
        {
          data:[val1,val2],
          backgroundColor: [
              "#42A5F5",
              "#66BB6A",
          ],
          hoverBackgroundColor: [
              "#64B5F6",
              "#81C784",
            ]
          }
        ]
      }
      this.chartOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        }
      }
    }
  }
  
  patcher(e:any){
    if(e.id === 'val1'){
      let val = 100 - (+e.value); //(event.target.value)
      this.form.get('val2').patchValue(val)
    }
    else if(e.id === 'val2'){
      let val = 100 - (+e.value);
      this.form.get('val1').patchValue(val)
    }
  }
}