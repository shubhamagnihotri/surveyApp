import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-survey-registration',
  templateUrl: './survey-registration.page.html',
  styleUrls: ['./survey-registration.page.scss'],
})
export class SurveyRegistrationPage implements OnInit {
  totalFormField = 10;
  croppingPatternShowForm:any;
  croppingPatternButtonPress:boolean;
  LoaneeFasalBimaShowForm:any;
  LoaneeFasalBimaButtonPress:boolean;
  nonLoaneeFasalBimaShowForm:any;
  nonLoaneeFasalBimaButtonPress:boolean;
  sourceOfawarenessShowForm:any;
  sourceOfawarenessButtonPress:boolean;
  enrolmentDocumentShowForm:any;
  enrolmentDocumentButtonPress:boolean;
  SurveyRegistrationForm: FormGroup;
  getError: any;
  showFormGroupNumber:any=7;
  buttonPressNumber:boolean;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.getForm();

  }

  setFormGroupNumber(number){
    // this.showFormGroupNumber = number;
    // console.log(this.showFormGroupNumber);

    if(number != this.showFormGroupNumber){
      this.buttonPressNumber = true ;
      this.showFormGroupNumber = number;
    }else{
      this.buttonPressNumber = false;
      this.showFormGroupNumber = null;
    }
    // console.log(this.showFormGroupNumber);
    // console.log(this.buttonPressNumber);
    console.log(this.SurveyRegistrationForm.get('generalDetail').invalid);
  }

  setCroppingPatternShow(number){
    if(number != this.croppingPatternShowForm){
      this.croppingPatternButtonPress = true ;
      this.croppingPatternShowForm = number;
    }else{
      this.croppingPatternButtonPress = false;
      this.croppingPatternShowForm = null;
    }
  }

  setSourceOfawarenessShow(number){
    if(number != this.sourceOfawarenessShowForm){
      this.sourceOfawarenessButtonPress = true ;
      this.sourceOfawarenessShowForm = number;
    }else{
      this.sourceOfawarenessButtonPress = false;
      this.sourceOfawarenessShowForm = null;
    }
  }

  setLoaneeFasalBimaShow(number){
    if(number != this.LoaneeFasalBimaShowForm){
      this.LoaneeFasalBimaButtonPress = true ;
      this.LoaneeFasalBimaShowForm = number;
    }else{
      this.LoaneeFasalBimaButtonPress = false;
      this.LoaneeFasalBimaShowForm = null;
    }
  }

  setNonLoaneeFasalBimaShow(number){
    if(number != this.nonLoaneeFasalBimaShowForm){
      this.nonLoaneeFasalBimaButtonPress = true ;
      this.nonLoaneeFasalBimaShowForm= number;
    }else{
      this.nonLoaneeFasalBimaButtonPress = false;
      this.nonLoaneeFasalBimaShowForm = null;
    }
  }

  setrequiredEnrolmentDocumentShow(number){
    if(number != this.enrolmentDocumentShowForm){
      this.enrolmentDocumentButtonPress = true ;
      this.enrolmentDocumentShowForm= number;
    }else{
      this.enrolmentDocumentButtonPress = false;
      this.enrolmentDocumentShowForm = null;
    }
  }

  getForm() {
    this.SurveyRegistrationForm = this.fb.group({
      // generalDetail group
      generalDetail: this.fb.group({
        name: ['hello', [Validators.required, Validators.minLength(3)]],
        gender: ['', Validators.required],
        age: ['', Validators.required],
        mobile: ['', Validators.required],
        fatherName: ['', Validators.required],
        addressHNo: ['', Validators.required],
        village: ['', Validators.required],
        tehsil: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        adhaarNo: ['', Validators.required],
        smartPhone: ['', Validators.required],
        type: ['', Validators.required],
        ifLoaneeAmount: [''],
        loanSource: ['']
      }),

      // demographicSocialProfile group
      demographicSocialProfile: this.fb.group({
        socialGroup: ['', Validators.required],
        educationalQualification: [],
        farmerCategory: ['', Validators.required],
        hhmember: this.fb.group({
          maleMember: ['', Validators.required],
          femaleMember: ['', Validators.required],
          childrenMember: ['', Validators.required],
          totalMember: ['', Validators.required]
        }),
        hhWorkingMember: this.fb.group({
          maleWorking: ['', Validators.required],
          femaleWorking: ['', Validators.required],
          totalWorking: ['', Validators.required]
        })
      }),

      // landDetail group
      landDetail: this.fb.group({
        holdingSize: ['', Validators.required],
        ownedLand: ['', Validators.required],
        leasdedIn: ['', Validators.required],
        irrigationAvailable: ['', Validators.required],
        irrigationSource: [''],
        irrigatedArea: ['']
      }),
       // croppingPattern group
      croppingPattern: this.fb.array([
        this.addCroppingPattern(),
      ]),

     
      // costOfCultivation group
      costOfCultivation: this.fb.group({

        landPreparationUnitCost: ['', Validators.required],
        landPreparationTotalCost: ['', Validators.required],
        sowing: this.fb.group({
          seedCostUnitCost: ['', Validators.required],
          SowingUnitCost: ['', Validators.required],
          seedCostTotalCost: ['', Validators.required],
          sowingTotalCost: ['', Validators.required]
        }),
        manureFertilizerCostUnitCost: ['', Validators.required],
        manureFertilizerCostTotalCost: ['', Validators.required],
        interculturalOperation: this.fb.group({
          thinningUnitCost: ['', Validators.required],
          gapFillingUnitCost: ['', Validators.required],
          weedingUnitCost: ['', Validators.required],
          hoeingUnitCost: ['', Validators.required],
          thinningTotalCost: ['', Validators.required],
          gapFillingTotalCost: ['', Validators.required],
          weedingTotalCost: ['', Validators.required],
          hoeingTotalCost: ['', Validators.required],
        }),
        plantProtection: this.fb.group({
          pesticideFungicideCostUnitCost: ['', Validators.required],
          labourCostUnitCost: ['', Validators.required],
          pesticideFungicideCostTotalCost: ['', Validators.required],
          labourCostTotalCost: ['', Validators.required]
        }),
        irrigationCost: this.fb.group({
          electricityFuelUnitCost: ['', Validators.required],
          labourUnitCost: ['', Validators.required],
          waterChargesUnitCost: ['', Validators.required],
          electricityFuelTotalCost: ['', Validators.required],
          labourTotalCost: ['', Validators.required],
          waterChargesTotalCost: ['', Validators.required]
        }),
        harvestingCost: this.fb.group({
          cuttingPickingUnitCost: ['', Validators.required],
          threshingUnitCost: ['', Validators.required],
          cuttingPickingTotalCost: ['', Validators.required],
          threshingTotalCost: ['', Validators.required],

        }),
        marketingCost: this.fb.group({
          packagingUnitCost: ['', Validators.required],
          transportationUnitCost: ['', Validators.required],
          marketingCommissionUnitCost: ['', Validators.required],
          packagingTotalCost: ['', Validators.required],
          transportationTotalCost: ['', Validators.required],
          marketingCommissionTotalCost: ['', Validators.required]
        }),
        totalExpenditureUnitCost: ['', Validators.required],
        totalExpenditureTotalCost: ['', Validators.required],
        saleOfFarmProduceUnitCost: ['', Validators.required],
        saleOfFarmProduceTotalCost: ['', Validators.required],
        netProfitLossUnitCost: ['', Validators.required],
        netProfitLossTotalCost: ['', Validators.required]
      }),
      // awareness group
      awareness:this.fb.group({
        knowAboutPmfbyRwbcis:[''],
        schemeInformation:this.fb.group({
          cropsCoveredPmfby:[''],
          cropsCoveredRwbcis:[''],
          enrollmentChannelsPmfby:[''],
          enrollmentChannelsRwbcis:[''],
          enrollmentCutOffDatesPmfby:[''],
          enrollmentCutOffDatesRwbcis:[''],
          sumInsuredPmfby:[''],
          sumInsuredRwbcis:[''],
          insuranceCompanyPmfby:[''],
          insuranceCompanyRwbcis:[''],
          acknowledgementReceiptPmfby:[''],
          acknowledgementReceiptRwbcis:[''],
          riskCoveredPmfby:[''],
          riskCoveredRwbcis:[''],
          claimProcessPmfby:[],
          claimProcessRwbcis:[],
          grievanceRedresselPmfby:[],
          grievanceRedresselRwbcis:[],
          insuranceCompanyNoPmfby:[],
          insuranceCompanyNoRwbcis:[],
          cropInsuranceAppPmfby:[],
          cropInsuranceAppRwbcis:[],
          applicationTrackingPmfby:[],
          applicationTrackingRwbcis:[],
        }),
        modeOfInformation:[''],
        specificModeOfInformation:[''],
        isSeminarAttendedPmfby:[''],
        whenSeminarAttended:[''],
        whereSeminarAttended:['']
      }),

         //awarenessSourceDetail:
      awarenessSourceDetail:this.fb.array([
          this.addAwarenessSourceDetail(),
      ]),

      //Enrollment group
      enrollmentdetail:this.fb.group({
        loaneeType:[''],
        // for loanee farmer
        loaneeEnrollment:this.fb.group({
          haveKcc:[],
          availLoan:[],
          loanPremiumDeducTionAwareness:[],
          pradhanMantriFasalBima:this.fb.array([
            this.addLoaneePradhanMantriFasalBimaForm()
          ]),
          receiptAcknowledgementProvided:[],
          reciveSmsForPmfby:[]
        }),
        // for Non loanee
        nonLoaneeEnrollment:this.fb.group({
          nonLoaneeCroppingDetail:this.fb.array([
            this.addLoaneePradhanMantriFasalBimaForm()
          ]),
          enrollmentChannelPremiumPay:[],
          specificEnrollmentChannelPremiumPay:[],
          payExtraMoneyCsc:[],
          processOfInsuringCropUnderPmfby:[],
          resonProcessOfInsuringCropUnderPmfby:[],
          cutOffDateUnderPmfby:[],
          requiredEnrolmentDocument:this.fb.array([
            this.addRequiredEnrolmentDocument()
          ]),
          receiptProvidedForSame:[],
          isSmsReciveForPmfby:[]
       
        }),

      }),

    });// form group closed

    this.getFormError();
    this.valueChangeSubscribe([
      {
        key:'type',compareValue:'loanee',formGroup:'generalDetail',
        validationFileds:['ifLoaneeAmount','loanSource']
      },
      {
        key:'irrigationAvailable',compareValue:'y',formGroup:'landdetail',
        validationFileds:['irrigationSource','irrigatedArea']
      },
    ]);
    
  }

  valueChangeSubscribe(validationArray){

    for(let x of validationArray){
      let filed = x.key;
      this.getError[filed].valueChanges.subscribe(typeValue=>{
        if(typeValue == x.compareValue){
          for(let validationFileds of x.validationFileds){
            this.getError[validationFileds].setValidators(Validators.required);
          }
        }else{
          for(let validationFileds of x.validationFileds){
            this.getError[validationFileds].clearValidators();
          }
        }
      });
    }

    // this.getError.type.valueChanges.subscribe(typeValue=>{
    //   console.log(this.SurveyRegistrationForm.get('generalDetail').get('ifLoaneeAmount').value);
    //   if(typeValue == 'loanee'){
    //     this.getError.ifLoaneeAmount.setValidators(Validators.required);
    //     this.getError.loanSource.setValidators(Validators.required);
    //   }else{
    //     this.getError.ifLoaneeAmount.clearValidators();
    //     this.getError.loanSource.clearValidators();
    //   }
    // });
  }
  
  //dyanamnic croppingPattern 
  addCroppingPattern():FormGroup{
    return this.fb.group({
      crop: ['', Validators.required],
      area: ['', Validators.required],
      yield: ['', Validators.required],
      sellingPrice: ['', Validators.required],
      amount: ['', Validators.required],
      soldTo: ['', Validators.required],
    });
  }

  addAwarenessSourceDetail():FormGroup{
    return this.fb.group({
      sourcesOfAwareness:['', Validators.required],
      govtOfficials:['', Validators.required],
      banks:['', Validators.required],
      insuranceCompanyTollNo:['', Validators.required],
      insuranceCompanyRepresentative:['', Validators.required],
      cscVle:['', Validators.required],
      gramPanchayat:['', Validators.required],
      fellowFarmer:['', Validators.required]
    });
  }
  addLoaneePradhanMantriFasalBimaForm():FormGroup{
    return this.fb.group({
      cropSeason:[''],
      cropInsured:[''],
      areaInsured:[''],
      farmerPremium:[''],
      sumInsured:[''] 
    })
  }

  addRequiredEnrolmentDocument():FormGroup{
    return this.fb.group({
      enrolmentDocument:[''],
    });
  }
  get AwarenessSourceArray(){
    return this.SurveyRegistrationForm.get('awarenessSourceDetail') as FormArray;
  }
  get loaneePradhanMantriFasalBima(){
    return this.SurveyRegistrationForm
    .get('enrollmentdetail')
    .get('loaneeEnrollment')
    .get('pradhanMantriFasalBima') as FormArray;
  }

  get nonLoaneeCroppingDetailArray(){
    return this.SurveyRegistrationForm
    .get('enrollmentdetail')
    .get('nonLoaneeEnrollment').get('nonLoaneeCroppingDetail') as FormArray;
  }

  get requiredEnrolmentDocumentArray(){
    return this.SurveyRegistrationForm.get('enrollmentdetail')
    .get('nonLoaneeEnrollment').get('requiredEnrolmentDocument') as FormArray;
  }

  // push object in to form array 
  addCroppingPatternFormData():void{
    (<FormArray>this.SurveyRegistrationForm.get('croppingPattern')).push(
      this.addCroppingPattern()
    )
    this.croppingPatternShowForm += 1;
    console.log(this.SurveyRegistrationForm.get('croppingPattern'));
  }


  addsourcesOfAwarenessFormData(){
    (<FormArray>this.SurveyRegistrationForm.get('awarenessSourceDetail')).push(
      this.addAwarenessSourceDetail()
    )
    this.sourceOfawarenessShowForm +=1;
  }
  addLoaneePradhanMantriFasalBima(){
    (<FormArray>this.SurveyRegistrationForm
      .get('enrollmentdetail')
      .get('loaneeEnrollment')
      .get('pradhanMantriFasalBima')).push(
      this.addLoaneePradhanMantriFasalBimaForm()
    )
    this.LoaneeFasalBimaShowForm +=1;
  }

  addNonLoaneeCroppingDetailFormData(){
     (<FormArray>this.SurveyRegistrationForm
      .get('enrollmentdetail')
      .get('nonLoaneeEnrollment').get('nonLoaneeCroppingDetail')).push(
      this.addLoaneePradhanMantriFasalBimaForm()
    )
    this.nonLoaneeFasalBimaShowForm +=1;
  }

  addRequiredEnrolmentDocumentFormData(){
    (<FormArray>this.SurveyRegistrationForm .get('enrollmentdetail')
    .get('nonLoaneeEnrollment').get('requiredEnrolmentDocument')).push(
    this.addRequiredEnrolmentDocument())
    this.enrolmentDocumentShowForm +=1;
  }
  getFormError() {
    this.getError = {
      //general details
      name: this.SurveyRegistrationForm.get('generalDetail').get('name'),
      gender: this.SurveyRegistrationForm.get('generalDetail').get('gender'),
      age: this.SurveyRegistrationForm.get('generalDetail').get('age'),
      mobile: this.SurveyRegistrationForm.get('generalDetail').get('mobile'),
      fatherName: this.SurveyRegistrationForm.get('generalDetail').get('fatherName'),
      addressHNo: this.SurveyRegistrationForm.get('generalDetail').get('addressHNo'),
      village: this.SurveyRegistrationForm.get('generalDetail').get('village'),
      tehsil: this.SurveyRegistrationForm.get('generalDetail').get('tehsil'),
      district: this.SurveyRegistrationForm.get('generalDetail').get('district'),
      state: this.SurveyRegistrationForm.get('generalDetail').get('state'),
      adhaarNo: this.SurveyRegistrationForm.get('generalDetail').get('adhaarNo'),
      smartPhone: this.SurveyRegistrationForm.get('generalDetail').get('smartPhone'),
      type: this.SurveyRegistrationForm.get('generalDetail').get('type'),
      ifLoaneeAmount: this.SurveyRegistrationForm.get('generalDetail').get('ifLoaneeAmount'),
      loanSource: this.SurveyRegistrationForm.get('generalDetail').get('loanSource'),

      //demographicSocialProfile
      socialGroup: this.SurveyRegistrationForm.get('demographicSocialProfile').get('socialGroup'),
      educationalQualification: this.SurveyRegistrationForm.get('demographicSocialProfile').get('educationalQualification'),
      farmerCategory: this.SurveyRegistrationForm.get('demographicSocialProfile').get('farmerCategory'),

      //demographicSocialProfile house hold
      maleMember: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('maleMember'),
      femaleMember: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('femaleMember'),
      childrenMember: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('childrenMember'),
      totalMember: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhmember').get('totalMember'),

      //demographicSocialProfile house hold working 
      maleWorking: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhWorkingMember').get('maleWorking'),
      femaleWorking: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhWorkingMember').get('femaleWorking'),
      totalWorking: this.SurveyRegistrationForm.get('demographicSocialProfile').get('hhWorkingMember').get('totalWorking'),

      // landdetail
      holdingSize:this.SurveyRegistrationForm.get('landDetail').get('holdingSize'),
      ownedLand:this.SurveyRegistrationForm.get('landDetail').get('ownedLand'),
      leasdedIn:this.SurveyRegistrationForm.get('landDetail').get('leasdedIn'),
      irrigationAvailable:this.SurveyRegistrationForm.get('landDetail').get('irrigationAvailable'),
      irrigationSource:this.SurveyRegistrationForm.get('landDetail').get('irrigationSource'),
      irrigatedArea:this.SurveyRegistrationForm.get('landDetail').get('irrigatedArea'),

      //croppingPattern
      crop:this.SurveyRegistrationForm.get('croppingPattern').get('crop'),
      area:this.SurveyRegistrationForm.get('croppingPattern').get('area'),
      yield:this.SurveyRegistrationForm.get('croppingPattern').get('yield'),
      sellingPrice:this.SurveyRegistrationForm.get('croppingPattern').get('sellingPrice'),
      amount:this.SurveyRegistrationForm.get('croppingPattern').get('amount'),
      soldTo:this.SurveyRegistrationForm.get('croppingPattern').get('soldTo'),
    }
    console.log(this.requiredEnrolmentDocumentArray);
   // console.log(this.SurveyRegistrationForm.get('awarenessSourceDetail'));
  }

}
