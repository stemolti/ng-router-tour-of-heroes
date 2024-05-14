import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { FormsModule } from '@angular/forms';
import { ComposeMessageComponent } from '../../compose-message/compose-message.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    ComposeMessageComponent,
  ],
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
})
export class CrisisCenterModule {}
