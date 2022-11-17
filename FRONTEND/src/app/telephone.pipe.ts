import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephonePipe'
})
export class TelephonePipe implements PipeTransform {

  transform( telephone: String ) {

    let internationalNb = "+33 " + telephone.substr(1, 1) + " ";
    for (let i=2; i<telephone.length; i+=2){
      internationalNb+=telephone.substr(i, 2)+" ";
 
    }
    return internationalNb;
  }
}
