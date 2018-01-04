import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NextMenuComponent } from './next-menu/next-menu.component';


const appRoutes: Routes = [
  { path: 'hello', component: MenuItemComponent },
  { path: 'new-slide', component: NextMenuComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    NextMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // Logs all internal evens - should just be for testing. 
    )

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
