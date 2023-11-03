import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './nabvar.component.html',
    styleUrls: ['./nabvar.component.css']
})

export class NavbarComponent {
    isOnInicioPage: boolean;
  
    constructor(private router: Router) {
      this.isOnInicioPage = this.router.url === '/inicio';
    }
  }
  