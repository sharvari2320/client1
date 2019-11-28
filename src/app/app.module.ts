import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EditComponent,
    DeleteComponent,
    NotfoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"register",component:RegisterComponent},
      {path:"edit/:No",component:EditComponent},
      {path:"delete/:No",component:DeleteComponent},
      {path:"**",component:NotfoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
