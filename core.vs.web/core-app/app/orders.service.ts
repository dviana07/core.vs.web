import { Injectable } from '@angular/core';
import { OrdersModel } from './orders/orders.model';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

    constructor() { }

    getOrders(userId): OrdersModel[] {
        let ret: OrdersModel[] = [
            { orderNumber: "O45686", description: "some order description here", price: 100.00 },
            { orderNumber: "O35489", description: "some order description here", price: 199.66 },
            { orderNumber: "O53564", description: "some order description here", price: 234.46 }
        ];

        return ret;
    }

}
