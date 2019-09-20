import {Component, OnInit} from '@angular/core';
import {User} from  '../_models';
import { UserService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'check_user',
    templateUrl: './check_user.component.html',
})
export class CheckUserComponent implements OnInit {

    Users: User[];
    

    constructor(
        private UserService: UserService,
        private router: Router
    )
    {

    }


    ngOnInit() {
        
        this.loadAllUsers();
    }


    private loadAllUsers()
    {
     
        this.UserService.getAll().subscribe
        (x => 
            {
            this.Users = x['Users'];});
          
    }
   

    deleteUser(id)
    {

        console.log(id);
      
        this.UserService.delete(id).subscribe
        (
            data => {
           
               // this.router.navigate(['/check_user']);

                this.loadAllUsers();

                console.log(data);
            },

          );
      


    }

    
}
