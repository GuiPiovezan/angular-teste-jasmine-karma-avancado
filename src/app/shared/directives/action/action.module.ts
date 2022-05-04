import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionDirective } from './adction.directive';

@NgModule({
  declarations: [ActionDirective],
  imports: [CommonModule],
  exports: [ActionDirective],
})
export class ActionDirectiveModule {}
