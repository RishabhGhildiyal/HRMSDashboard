import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Regex } from 'src/app/constants/regex';

@Pipe({
  name: 'showError',
  pure:false
})
export class ShowErrorPipe implements PipeTransform {

  transform(form: FormGroup,control: string, label: string): any {
    // console.log(form,control,label);

    if(form.get(control)?.touched && form.get(control)?.invalid){
     const errors = form.get(control)?.errors;
    //  console.log(form,control,label);

     if(errors?.hasOwnProperty("required")){
    //  console.log(form,control,label);

       return `${label} is Required` ;

     }
     else if(errors?.hasOwnProperty("minlength")){
    //  console.log(form,control,label);

       return `Minimum ${errors.minlength.requiredLength} characters required`;
     }

     else if(errors?.hasOwnProperty("maxlength")){
    //  console.log(form,control,label);

       return `Maximum ${errors.maxlength.requiredLength} characters required`;
     }
     else if(errors?.hasOwnProperty('pattern')){
       if(
         control ==="password" ||
         control ==="confirmPass"
       ){
        //  return `${label} must contain 8-20 characters, with  one uppercase
        //  alphabet, one lowecase alphabet, one number and a special character`;
        return `${label} is in incorrect pattern`
       }
       else {
         let pattern = errors.pattern.requiredPattern;

         return this.PATTERN_ERRORS(pattern,label)
       }
     }
     else if (errors?.hasOwnProperty("passwordNotMatch")) {
       return `Your passwords do not match, please check.`;
     }
    }
   }
   PATTERN_ERRORS(pattern: any, key: string) {

     let comment: any
    //  console.log(pattern,"pattern");
     if (pattern == Regex.email) {

       comment = `${key} is invalid or not in correct format`;
     }
     else if (pattern == Regex.password) {
       comment = `${key} can not contain blank spaces`
     }
     else if (pattern == Regex.name) {
       comment = `${key} can not be blank`
     }
     else if (pattern == Regex.phone) {
       comment = `${key} can contain only digits`
     }
    return comment;
   }

}
