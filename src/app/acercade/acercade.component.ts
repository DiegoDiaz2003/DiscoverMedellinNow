import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-acercade',
    templateUrl: './acercade.component.html',
    styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
    data: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get('/src/app/componentes/restaurante').subscribe((response) => {
        this.data = response;
      });
    }
}