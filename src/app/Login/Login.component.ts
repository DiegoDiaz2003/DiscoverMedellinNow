import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
    selector: 'app-Login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css']
})

export class LoginComponent {
    username: string = '';
    password: string = '';

    constructor(private http: HttpClient, private router: Router) { }

    submitForm() {
        const formData = new FormData();
        formData.append('name', this.username);
        formData.append('contrasenia', this.password);

        this.http.post('http://127.0.0.1:8000/login/', formData).subscribe((response) => {
            this.router.navigate(['/perfil']);  

        });
    }
    
}