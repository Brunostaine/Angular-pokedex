import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule],

  exports: [MatCardModule, MatToolbarModule, MatIconModule],
})
export class AngularMaterialModule {}
