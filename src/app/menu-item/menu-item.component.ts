import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../types/MenuItems';
import { Router } from '@angular/router';
import { Event } from '_debugger';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {

  MENU : MenuItem[] = [
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
    
    let t = document.location.pathname;
    t = t.split("/")[1];
    
    let e = new MenuItem(t, document.location.pathname);
    this.selectedFragment(e, null);

  }

  selectedFragment(menu : MenuItem, event : Event): void{

    this.router.navigate(['/'+menu.location.toLocaleLowerCase()]);

    resetList(); 
    resetMenuList();
    if(event == null){
      setReloadActive(menu);
    } else {
      setActive(event);
    }

    function setActive(event : Event){
      let target = event.target.id;
      let targetComposite = target.split("-")[1];

      // Menu
      if(document.getElementById("menu-"+targetComposite) != null){
        document.getElementById("menu-"+targetComposite).parentElement.className = "nav-item active";
      }

      // List
      if(document.getElementById("list-"+targetComposite) != null){
        document.getElementById("list-"+targetComposite).className = "list-group-item list-group-item-action menu-list menu-item active";
      }
      
    }

    function setReloadActive(menu : MenuItem){
      // Menu
      if(document.getElementById("menu-"+menu.name) != null){
        document.getElementById("menu-"+menu.name).parentElement.className = "nav-item active";
      }

      // List
      if(document.getElementById("list-"+menu.name) != null){
        document.getElementById("list-"+menu.name).className = "list-group-item list-group-item-action menu-list menu-item active";
      }
    }

    function resetList(){
      let list = document.getElementsByClassName("list-group-item");
      for(let i = 0; i < list.length; i++){
        list[i].className = "list-group-item list-group-item-action menu-list menu-item";
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
