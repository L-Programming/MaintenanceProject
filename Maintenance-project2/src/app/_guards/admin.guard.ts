import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../_services';
import { AuthenticationService } from '@/_services';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.userService.checkTokenA()
                .pipe()
                .subscribe(
                    data => {

                        if (data["error"]) {
                            localStorage.removeItem('currentUser');
                            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
                            return false;
                        }
                        else {
                            return true;
                        }
                    },
                    error => {
                        localStorage.removeItem('currentUser');
                        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
                        return false;
                    });

            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
}
}