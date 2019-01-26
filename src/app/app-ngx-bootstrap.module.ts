import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [BsDropdownModule.forRoot(), TabsModule.forRoot(), BsDatepickerModule.forRoot(), PaginationModule.forRoot()],
  exports: [BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule]
})
export class AppNgxBootstrapModule {}
