import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aymen';
  prenom = 'test';
  treatSonData(data) {
    alert(data);
  }
}
