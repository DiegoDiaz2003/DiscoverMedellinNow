import { Component } from "@angular/core";
import { ApiActivity } from '../../services/actividades_s/actividades.service';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})

export class FormularioComponent { 
    constructor(private apiActivity: ApiActivity) {
        this.apiActivity = apiActivity;  // Asignación de la instancia del servicio
    }

    onSubmit(activityId: number, imageFile: File) {
        this.apiActivity.uploadImage(activityId, imageFile).subscribe(
            (response) => {
                
            },
            (error) => {
                
            }
        );
    }

    
}
