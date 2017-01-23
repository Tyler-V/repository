import { Component } from '@angular/core';
import { SharedComponent } from '../shared.component';
import { IMenu, IMenuChild } from './menu.d';

@Component({
  selector: 'tb-navigation',
  template: require('./navigation.component.html!text'),
  styles: [require('./navigation.component.css!text')]
})

export class NavigationComponent {

  searchText: string = "";
  minWidth: number = 60;
  maxWidth: number = 250;
  navigationOpen: boolean = true;

  menus: IMenu[] = [{
    name: 'Latest News',
    glyphicon: 'info',
    route: '',
    children: null
  },
  {
    name: 'Homepage',
    glyphicon: 'home',
    route: '',
    children: null
  },
  {
    name: 'Forums',
    glyphicon: 'forum',
    route: '',
    children: null
  },
  {
    name: 'Download TRiBot',
    glyphicon: 'file_download',
    route: '',
    children: null
  },
  {
    name: 'Scripts',
    glyphicon: 'shopping_cart',
    route: '',
    children: null
  },
  {
    name: 'User Panel',
    glyphicon: 'account_box',
    route: '',
    expanded: false,
    children: [{
      name: 'Home',
      route: ''
    },
    {
      name: 'My Scripts',
      route: ''
    },
    {
      name: 'Purchase Credits',
      route: ''
    },
    {
      name: 'Transfer Credits',
      route: ''
    },
    {
      name: 'Purchase VIP',
      route: ''
    },
    {
      name: 'Donate',
      route: ''
    }
    ]
  },
  {
    name: 'Scripter Panel',
    glyphicon: 'build',
    route: '',
    expanded: false,
    children: [{
      name: 'Home',
      route: ''
    },
    {
      name: 'My Scripts',
      route: ''
    },
    {
      name: 'Submit Script',
      route: ''
    },
    {
      name: 'Script Statistics',
      route: ''
    },
    {
      name: 'Request Payout',
      route: ''
    }
    ]
  },
  {
    name: 'Administrator Panel',
    glyphicon: 'supervisor_account',
    route: '',
    expanded: false,
    children: [{
      name: 'Home',
      route: ''
    },
    {
      name: 'User Manager',
      route: ''
    },
    {
      name: 'Script Manager',
      route: ''
    },
    {
      name: 'Payout Manager',
      route: ''
    }
    ]
  }];

  constructor(private shared: SharedComponent) {
    this.shared.navigationWidth = this.maxWidth;
  }

  toggleNavigation(menu?: IMenu) {
    if (menu != null && this.navigationOpen)
      return;
    if (this.shared.navigationWidth == this.maxWidth) {
      this.closeChildren();
      this.shared.navigationWidth = this.minWidth;
      this.navigationOpen = false;
    }
    else {
      this.shared.navigationWidth = this.maxWidth;
      setTimeout(() => {
        this.navigationOpen = true;
      }, 300);
    }
  }

  closeChildren() {
    this.menus.forEach(menu => {
      if (menu.children != null)
        menu.expanded = false;
    })
  }

  toggleChildren(menu: IMenu) {
    let expanded: boolean = menu.expanded;
    this.closeChildren();
    menu.expanded = !expanded;
  }
}