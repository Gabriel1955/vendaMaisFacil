import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { Routes, RouterModule } from "@angular/router"
import { Component, ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
     { path: 'config', component: ConfigurationComponent },
     { path: '', component: HomeComponent  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);