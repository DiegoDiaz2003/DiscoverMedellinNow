import { Component } from "@angular/core";
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
formData: { 
    name: string, 
    description: string, 
    phone: string, 
    address: string, 
    website: string, 
    openhour: string, 
    closehour: string, 
    price: string, 
    sponsor: string, 
    image: any 
  } = {
    name: "",
    description: "",
    phone: "",
    address: "",
    website: "",
    openhour: "",
    closehour: "",
    price: "",
    sponsor: "",
    image: null
  };
   selectedFiles: File[] = [];

   constructor(private http: HttpClient) {}

   onFileSelected(event: any) {
       this.selectedFiles = event.target.files;
   }

   onSubmit() {
       const formData = new FormData();

       // Agrega campos de texto al FormData
       formData.append("name", this.formData.name);
       formData.append("description", this.formData.description);

       // Agrega imágenes al FormData
       for (const file of this.selectedFiles) {
           formData.append("image", file);
       }

       this.http.post("http://localhost:8000/upload-image/", formData).subscribe(
           (response) => {
               console.log("Imágenes cargadas con éxito", response);
           },
           (error) => {
               console.error("Error al cargar las imágenes", error);
           }
       );
   }
}
