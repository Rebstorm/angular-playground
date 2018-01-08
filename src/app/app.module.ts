import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { Fragment1Component } from './fragment1/fragment1.component';
import { Fragment2Component } from './fragment2/fragment2.component';
import { Fragment3Component } from './fragment3/fragment3.component';
import { Fragment4Component } from './fragment4/fragment4.component';


const appRoutes: Routes = [
  { path: 'menu', component: MenuItemComponent },
  { path: 'fragment1', component: Fragment1Component },
  { path: 'fragment2', component: Fragment2Component },
  { path: 'fragment3', component: Fragment3Component },
  { path: 'fragment4', component: Fragment4Component },
  { path: '**', component: Fragment1Component }
]


@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    Fragment1Component,
    Fragment2Component,
    Fragment3Component,
    Fragment4Component,
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
