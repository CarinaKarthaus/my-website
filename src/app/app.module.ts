import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { faGithub, faXing, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCheckCircle, faExclamationTriangle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContentComponent } from './content/content.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent,
    ContentComponent,
    DialogContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatGridListModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    MatSidenavModule,
    ScrollingModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MenuComponent,
    useValue: {}
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (library: FaIconLibrary) {
    // Add icons to library to make them accessible
    library.addIcons(faGithub, faLinkedinIn, faXing, faBars, faCheckCircle, faExclamationTriangle, faGlobeAmericas);
  }

 }
