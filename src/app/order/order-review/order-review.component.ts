import { Component, OnInit, HostListener } from '@angular/core';

declare var Razorpay: any;
@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent {
  message: any = 'Not yet stared';
  paymentId = '';
  error = '';
  title = 'angular-razorpay-intergration';
  options = {
    key: 'rzp_test_lQiahq5iON2wZj',
    amount: '',
    name: 'Mind Hub',
    description: 'The Certificate Prep Store.',
    image: 'ser',
    order_id: '',
    currency: 'INR',
    handler: function (response: any) {
      var event = new CustomEvent('payment.success', {
        detail: response,
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
    },
    prefill: {
      name: '',
      email: '',
      contact: ''
    },
    notes: {
      address: ''
    },
    theme: {
      color: '#3399cc'
    }
  };

  makepayment() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = '1000'; //paise
    this.options.prefill.name = 'Kishor';
    this.options.prefill.email = 'userdemo@gmail.com';
    this.options.prefill.contact = '123456789';
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    });
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = 'Success Payment';
  }
}

// constructor() { }

// ngOnInit(): void {
// }
