import { Component } from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import { ApiActivity } from "../services/actividades_s/actividades.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  formData: FormData = new FormData();

//  formData: any = {
    name: string = '';
    phone: string ='';
    indications: string = '';
    website: string = '';
    openhour: string = '';
    closehour: string = '';
    description: string = '';
    price: string = '';
    sponsor: string = '';
 
//  };

  constructor(private http: HttpClient) { }
  
  
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formData.append('image', file, file.name);
    }
  }
  submitForm() {

    this.formData.append('name', this.name); 
    this.formData.append('phone', this.phone);
    this.formData.append('indications', this.indications);
    this.formData.append('website', this.website);
    this.formData.append('openhour', this.openhour);
    this.formData.append('closehour', this.closehour);
    this.formData.append('description', this.description);
    this.formData.append('price', this.price);
    this.formData.append('sponsor', this.sponsor);

    this.http.post('https://api-activity-dmn.onrender.com/activities/', this.formData)
      .subscribe((response) => {
        
      });
  }
}