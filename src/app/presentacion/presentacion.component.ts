import { Component, Input, OnInit } from "@angular/core";




@Component({
    selector: 'app-inicio',
    templateUrl: './presentacion.component.html',
    styleUrls: ['./presentacion.component.css']
})

export class PresentacionComponent implements OnInit {
    @Input() product: any;

    horaActual: Date = new Date();


    ngOnInit(): void {
    }

    buildDateFromTimeString(timeString: string): Date {
        const date = new Date();
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        date.setUTCHours(hours, minutes, seconds);
        return date;
    }

}

