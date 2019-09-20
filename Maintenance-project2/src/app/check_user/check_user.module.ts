import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckUserComponent} from './check_user.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CheckUserComponent
    ],
    exports: [
        CheckUserComponent
    ]
})
export class CheckUserModule {}
