import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../types/MenuItems';
import { Router } from '@angular/router';
import { Event } from '_debugger';

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

  selectedFragment(menu : MenuItems, event : Event): void{
    this.router.navigate(['/'+menu.location.toLocaleLowerCase()]);

    resetList(); 
    resetMenuList();

    setActive(event);

    //event.target.className = "list-group-item list-group-item-action menu-list active";

    function setActive(event : Event){
      let target = event.target.id;
      let targetComposite = target.split("-")[1];

      // Menu
      if(document.getElementById("menu-"+targetComposite) != null){
        document.getElementById("menu-"+targetComposite).className = "nav-item active";
      }

      // List
      if(document.getElementById("list-"+targetComposite) != null){
        document.getElementById("list-"+targetComposite).className = "list-group-item list-group-item-action menu-list active";
      }
      console.log(targetComposite);
    }

    function resetList(){
      let list = document.getElementsByClassName("list-group-item");
      for(let i = 0; i < list.length; i++){
        list[i].className = "list-group-item list-group-item-action menu-list";
      }
    }

    function resetMenuList(){
      let list = document.getElementsByClassName("nav-item");
      for(let i = 0; i < list.length; i++){
        list[i].className = "nav-item";
      }
    }
  }

  

  

}
