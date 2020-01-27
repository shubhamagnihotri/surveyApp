import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray,FormGroup,FormBuilder,Validators } from "@angular/forms";
@Component({
  selector: 'app-survey-registration',
  templateUrl: './survey-registration.page.html',
  styleUrls: ['./survey-registration.page.scss'],
})
export class SurveyRegistrationPage implements OnInit {
  totalFormField = 10;
  SurveyRegistrationForm:FormGroup;
  getError:any;
  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.getForm();
    
  }
   getForm(){
      this.SurveyRegistrationForm = this.fb.group({
        generalDetail:this.fb.group({
          name:['hello',[Validators.required,Validators.minLength(3)]],
          gender:['',Validators.required],
          age:['',Validators.required],
          mobile:['',Validators.required],
          fatherName:['',Validators.required],
          addressHNo:['',Validators.required],
          village:['',Validators.required],
          tehsil:['',Validators.required],
          district:['',Validators.required],
          state:['',Validators.required],
          adhaarNo:['',Validators.required],
          smartPhone:['',Validators.required],
          type:['',Validators.required],
          ifLoaneeAmount:['',Validators.required],
          loanSource:['',Validators.required]
        }),
        demographicSocialProfile:this.fb.group({
          socialGroup:['',Validators.required],
          educationalQualification:[],
          farmerCategory:['',Validators.required],
          hhmember:this.fb.group({
            maleMember:['',Validators.required],
            femaleMember:['',Validators.required],
            childrenMember:['',Validators.required],
            totalMember:['',Validators.required]
          }),
          hhWorkingMember:this.fb.group({
            maleWorking:['',Validators.required],
            femaleWorking:['',Validators.required],
            totalWorking:['',Validators.required]
          })
        })
      });
      
      this.getFormError();
      //this.SurveyRegistrationForm.value;
     //console.log(this.SurveyRegistrationForm.get('generalDetail').get('gender').invalid);

  }

  getFormError(){
    this.getError = {
      //general details
      name:this.SurveyRegistrationForm.get('generalDetail').get('name'),
      gender:this.SurveyRegistrationForm.get('generalDetail').get('gender'),
      age:this.SurveyRegistrationForm.get('generalDetail').get('age'),
      mobile:this.SurveyRegistrationForm.get('generalDetail').get('mobile'),
      fatherName:this.SurveyRegistrationForm.get('generalDetail').get('fatherName'),
      addressHNo:this.SurveyRegistrationForm.get('generalDetail').get('addressHNo'),
      village:this.SurveyRegistrationForm.get('generalDetail').get('village'),
      tehsil:this.SurveyRegistrationForm.get('generalDetail').get('tehsil'),
      district:this.SurveyRegistrationForm.get('generalDetail').get('district'),
      state:this.SurveyRegistrationForm.get('generalDetail').get('state'),
      adhaarNo:this.SurveyRegistrationForm.get('generalDetail').get('adhaarNo'),
      smartPhone:this.SurveyRegistrationForm.get('generalDetail').get('smartPhone'),
      type:this.SurveyRegistrationForm.get('generalDetail').get('type'),
      ifLoaneeAmount:this.SurveyRegistrationForm.get('generalDetail').get('ifLoaneeAmount'),
      loanSource:this.SurveyRegistrationForm.get('generalDetail').get('loanSource'),

      //demographicSocialProfile
      socialGroup:this.SurveyRegistrationForm.get('demographicSocialProfile').get('smartPhone'),
      educationalQualification:this.SurveyRegistrationForm.get('demographicSocialProfile').get('educationalQualification'),
      farmerCategory:this.SurveyRegistrationForm.get('demographicSocialProfile').get('farmerCategory'),
     
      //demographicSocialProfile house hold
      maleMember:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('maleMember'),
      femaleMember:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('femaleMember'),
      childrenMember:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('childrenMember'),
      totalMember:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('totalMember'),
     
      //demographicSocialProfile house hold working 
      maleWorking:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhWorkingMember').get('maleWorking'),
      femaleWorking:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhWorkingMember').get('femaleWorkingc'),
      totalWorking:this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhWorkingMember').get('totalWorking'),


    }
    console.log(this.getError);
  }

}
