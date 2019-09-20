import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusPageComponent} from './status_page.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StatusPageComponent
    ],
    exports: [
        StatusPageComponent
    ]
})
export class StatusPageModule {}
