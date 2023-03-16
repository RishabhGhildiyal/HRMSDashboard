import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsolutePathPipe } from './absolute-path.pipe';

@NgModule({
  declarations: [AbsolutePathPipe],
  imports: [CommonModule],
  exports: [AbsolutePathPipe],
})
export class AbsolutePipeModule { }
