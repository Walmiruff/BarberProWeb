import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LayoutRoutingModule,
    ],
    declarations: [LayoutComponent],

})
export class LayoutModule {}
