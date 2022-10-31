import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from './clickOutside.directive';
import { MenuComponent } from './menu/menu.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddProductButtonComponent } from './add-product-button/add-product-button.component';
import { EditProductButtonComponent } from './edit-product-button/edit-product-button.component';
import { EmailFormComponent } from './email-form/email-form.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'backoffice', component: AdminPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ClickOutsideDirective,
    MenuComponent,
    AdminPageComponent,
    AddProductButtonComponent,
    EditProductButtonComponent,
    EmailFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
