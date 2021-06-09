import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
})
export class ComponentsComponent implements OnInit {
  focus;
  focus1;
  focus2;

  subscribeMeMessage = '';
  subscribeMeMobileNumber = '';
  subscribeMeName = '';
  showError = false;
  showSuccess = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  subscribeMe() {
    const subscribeMeData = {
      actionType: 'Subscribe Me',
      subscribeMeMessage: this.subscribeMeMessage,
      subscribeMeMobileNumber: this.subscribeMeMobileNumber,
      subscribeMeName: this.subscribeMeName,
    };

    this.httpClient
      .post('https://formspree.io/f/xknkbnzp', subscribeMeData)
      .subscribe(
        () => (this.showSuccess = true),
        () => (this.showError = true)
      );
  }
}
