import { AbstractControl, ValidationErrors } from "@angular/forms";

export class myValidator{
    static maxNum(control :AbstractControl) : null | ValidationErrors{
        if(+control.value > 100){
            return { 'OverVal' : true}
        }else{
            return null
        }
    }
}