import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';

const google_oauth_client_id:string = '750040336077-gsga2orrke7846q2394h2h65bp2qdd4o.apps.googleusercontent.com';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
