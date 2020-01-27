import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { SurveyRegistrationPageRoutingModule } from './survey-registration-routing.module';

import { SurveyRegistrationPage } from './survey-registration.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SurveyRegistrationPageRoutingModule
  ],
  declarations: [SurveyRegistrationPage]
})
export class SurveyRegistrationPageModule {}
