import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router'
import { HttpClientModule }    from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HttpFormComponent } from './http-form/http-form.component';
import { HttpchildComponent } from './httpchild/httpchild.component';
import { EditComponent } from './edit/edit.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'notFound', component: ErrorComponent},
  {path: 'view/:id', component: ViewComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: '*', redirectTo: '/notFound'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateComponent,
    ViewComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    HttpFormComponent,
    HttpchildComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
