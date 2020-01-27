import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surveyRegistration'
})
export class SurveyRegistrationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
