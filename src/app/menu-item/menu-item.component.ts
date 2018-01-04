import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../types/MenuItems';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {

  MENU : MenuItems[] = [
    { location : "fragment1", name : "fragment1" },
    { location : "fragment2", name : "fragment2" },
    { location : "fragment3", name : "fragment3" },
    { location : "fragment4", name : "fragment4" },
  ];
  
  // First thing that is called in the class. 
  constructor(private router: Router) {
    
  }

  // This is called after the constructor.
  ngOnInit() {

  }

  selectedMenu(menu : MenuItems): void{
    this.router.navigate(['/'+menu.location.toLocaleLowerCase()]);
  }

  

}
