import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProtectedComponent } from './protected.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';

import { SharedModule } from '../shared';
import { UnbundleComponent } from './unbundle/unbundle.component';
import { EnrollComponent } from './enroll/enroll.component';
import { AllocateComponent } from './allocate/allocate.component';
import { DispatchComponent } from './dispatch/dispatch.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    ProtectedRoutingModule
  ],
  declarations: [ProtectedComponent, DashboardComponent, UnbundleComponent, EnrollComponent, AllocateComponent, DispatchComponent]
})
export class ProtectedModule { }
