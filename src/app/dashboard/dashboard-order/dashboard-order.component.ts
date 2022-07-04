import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { orderdetail } from 'src/app/shared/data/orderdetail';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  public orderDetails: any;
  // orderDetail: orderdetail[] = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getOrdersStatus();
  }

  getOrdersStatus(): void {
    this.orderService.getOrdersStatus().subscribe((data: any) => {
      this.orderDetails = data;
      console.log(this.orderDetails);
    });
  }
}
