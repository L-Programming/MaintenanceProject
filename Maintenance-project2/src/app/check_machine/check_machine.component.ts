import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService, MachineService } from '@/_services';


@Component({
    templateUrl: './check_machine.component.html'
})
export class CheckMachineComponent implements OnInit {


    
    
    createMachine: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private machineservice: MachineService,
        private alertService: AlertService

    )
    {

    }


    ngOnInit() {

        this.createMachine = this.formBuilder.group({
            Name: ['', Validators.required],
            Description: ['', Validators.required]
        });

       //this.resetForm();

    }
      // convenience getter for easy access to form fields
      get f() { return this.createMachine.controls; }




      resetForm() {
        this.createMachine = this.formBuilder.group({
          Name: [''],
          Description: ['']
        });
      }



   

    onSubmit() {
        

        this.submitted = true;

        // stop here if form is invalid
        if (this.createMachine.invalid) {
            return;
        }

        this.loading = true;
        this.machineservice.create(this.createMachine.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/admin']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
}
