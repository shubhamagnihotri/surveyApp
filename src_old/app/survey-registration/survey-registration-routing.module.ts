import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyRegistrationPage } from './survey-registration.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRegistrationPageRoutingModule {}
