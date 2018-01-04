import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../types/MenuItems';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {

  MENU : MenuItems[] = [];
  
  // First thing that is called in the class. 
  constructor(private router: Router) {
    for(var i = 0; i < 5; i++){
      this.MENU.push(new MenuItems("menu-"+i, "new-slide"));
    }

  }

  // This is called after the constructor.
  ngOnInit() {

  }

  selectedMenu(menu : MenuItems): void{
    this.router.navigate(['/'+menu.location.toLocaleLowerCase()]);
  }

  

}
