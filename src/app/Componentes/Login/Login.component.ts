import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-Login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css']
})

export class RestauranteComponent implements OnInit {
    data: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get('/src/app/componentes/Login').subscribe((response) => {
        this.data = response;
      });
    }
}