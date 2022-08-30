import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobilephoto';

  public appPages = [

    {

      title: 'Take a photo',

      url: '/capture',

      icon: 'camera'

    },

    {

      title: 'View gallery',

      url: '/view',

      icon: 'globe'

    }

  ];
}
