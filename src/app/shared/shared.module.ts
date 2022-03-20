import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TopNavigationBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    TopNavigationBarComponent
  ]
})
export class SharedModule { }
