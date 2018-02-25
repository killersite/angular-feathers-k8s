import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  testClick(e) {
    this.testing(e);
  }

  private testing(e: any) {
    console.log(e);
  }
}
