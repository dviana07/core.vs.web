import { Component, OnInit } from '@angular/core';
import { OrdersModel } from './orders.model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    constructor() { }

    orders: OrdersModel[] = [
        { orderNumber: "O45686", description: "some order description here", price: 100.00 },
        { orderNumber: "O35489", description: "some order description here", price: 199.66 },
        { orderNumber: "O53564", description: "some order description here", price: 234.46 }
    ];

    ngOnInit() {
    }

}
