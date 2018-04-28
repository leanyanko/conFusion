import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Feedback, ContactType} from '../shared/feedback';
import { flyInOut } from '../animations/app.animation';
import { baseURL } from '../shared/baseurl';

import { FeedbackService } from '../services/feedback.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchmap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
      '@flyInOut': 'true',
      'style': 'display: block'   
  },
  animations: [
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  // feedbackcopy = null;
  // feedbackIds: number[];
  // prev: number;
  // next: number;
  // started: boolean = false;
  // errMsg: string;
  // visibility = 'shown';

  feedbackReceived : Feedback;

  showSpinner:boolean=false;
  feedbackErrMess : string;

  formErrors = {
    'firstname'  : '',
    'lastname' : '',
    'telnum' : '',
    'email' :''
  }

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  constructor(private fb: FormBuilder,
              private feedbackService: FeedbackService,
              private location: Location,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL) {
    
   }

  ngOnInit() {
    this.createForm();
  //   this.feedbackService.getFeedbackIds().subscribe(feedbackIds => this.feedbackIds = feedbackIds);
  //  this.route.params
  //    .switchMap((params: Params) =>  { 
  //      this.visibility = 'hidden'; 
  //      return this.feedbackService.getFeedback(+params['id']); 
  //     })
  //    .subscribe(feedback => { this.feedback = feedback; this.feedbackcopy = feedback; this.setPrevNext(feedback.id); this.visibility = 'shown'; },
  //               errmess => this.errMsg = <any>errmess);    

  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }


  // setPrevNext(dishId: number) {
  //   let index = this.feedbackIds.indexOf(dishId);
  //   this.prev = this.feedbackIds[(this.feedbackIds.length + index - 1)%this.feedbackIds.length];
  //   this.next = this.feedbackIds[(this.feedbackIds.length + index + 1)%this.feedbackIds.length];
  // }

  goBack(): void{
    this.location.back();
  }


  onSubmit(){
    this.feedback = this.feedbackForm.value;

    // this.feedbackcopy.push(this.feedback);
    // this.feedbackcopy.save()
    // .subscribe(feedback => this.feedback = feedback);
    this.showSpinner = true;
    this.feedbackService.submitFeedback(this.feedback)
    .subscribe(feedback => {
      this.feedbackReceived = feedback; 
      this.showSpinner =false;
      setTimeout(( ) => {
        this.feedbackReceived =null;
        this.feedbackForm.reset({
          firstname: '',
          lastname: '',
          telnum: '',
          email: '',
          agree: false,
          contacttype: 'None',
          message: ''
        });
      }, 5000)

    }
    , errMess => this.feedbackErrMess = errMess);  

    console.log(this.feedback);

  //  console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '', 
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

}
