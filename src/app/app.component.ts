import { Component } from '@angular/core';
import {config, CognitoIdentityCredentials, LexRuntime} from 'aws-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public lexruntime: LexRuntime;

  title = 'error';

  constructor() {
    config.region = 'eu-central-1';
    config.credentials = new CognitoIdentityCredentials({
      // Provide your Pool Id here
      IdentityPoolId: '1',
    });
    this.lexruntime = new LexRuntime();
  }
}
