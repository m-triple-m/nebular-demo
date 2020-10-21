import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { NbSidebarModule, NbButtonModule ,NbCardModule,NbSearchModule,NbUserModule, NbCheckboxModule,NbInputModule,
NbIconModule } from '@nebular/theme';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseItemsComponent } from './browse-items/browse-items.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    BrowseComponent,
    BrowseItemsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(), NbLayoutModule, NbButtonModule, NbCardModule, NbSearchModule,NbUserModule, NbInputModule,
    NbIconModule,
    NbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
