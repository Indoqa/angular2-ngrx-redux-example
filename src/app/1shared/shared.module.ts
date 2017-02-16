import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

import { CountComponent } from './components/count.component';
import { ListComponent } from './components/list.component';

@NgModule({
  declarations: [
    CountComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [CountComponent, ListComponent]
})

export class SharedModule {

}
