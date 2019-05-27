import { Component } from '@angular/core';
import { NavController,Form } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  credentialsForm: FormGroup;
  public name;
  public cont;
  public msg;

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {

    this.credentialsForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.pattern("[a-z,' ']*"),
        Validators.required
      ])],
      id: [''],
      no: ['', Validators.compose([
        Validators.pattern("[0-9]{10}"),
        Validators.required
      ])],
      msg:['', Validators.compose([
        Validators.pattern("[a-z,' ']*"),
        Validators.required
      ])]
    });

  }

  send(){
    console.log("name="+this.name+"\n" +"contact="+this.cont+"\n"+"msg="+this.msg);
  }

}
