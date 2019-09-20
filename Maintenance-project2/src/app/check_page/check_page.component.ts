import {Component, OnInit, NgModule} from '@angular/core';
import {Machine} from  '../_models';
import { AlertService, MachineService } from '@/_services';
import { ItemService } from '@/_services/item.service';
import { Item } from '@/_models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'check_page',
    templateUrl: './check_page.component.html'
})
export class CheckPageComponent implements OnInit{

    rForm: FormGroup;


    Machines: Machine[];

    ItemModel = new Item();

    
    constructor(
        private machineservice: MachineService,
        private itemservice: ItemService,
        private alertservice: AlertService,
        private router: Router,

    )
    {

    }

    ngOnInit() {

       
        this.loadAllMachines();

    }

    private getnameofatraction(machine){

        console.log(machine);
    }


    private loadAllMachines()
    {
     
        this.machineservice.getAll().subscribe
        (x => 
            {
            this.Machines = x['Machines'];});

            
          
    }

    saveItem(item){

        var txt = item.topic;
        var num = txt.replace(/[^0-9]/g,'');
        item.topic=num;
        
        
        this.itemservice.create(item).subscribe(
            data => {
                this.alertservice.success('Ok',true);
                this.router.navigate(['/admin']);
            },
            error => {
                this.alertservice.error(error);
      
              });
        

    }

  

   
    
}
