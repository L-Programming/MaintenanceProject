import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard, AdminGuard} from './_guards';
import {CheckPageComponent} from './check_page';
import {StatusPageComponent} from './status_page';
import {CheckUserComponent} from './check_user';
import {CheckMachineComponent} from './check_machine';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'check_page', component: CheckPageComponent, canActivate: [AdminGuard]  },
    { path: 'status_page', component: StatusPageComponent },
    { path: 'check_user', component: CheckUserComponent, canActivate: [AdminGuard]  },
    { path: 'check_machine', component: CheckMachineComponent, canActivate: [AdminGuard]  },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);