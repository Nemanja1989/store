import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BuyersComponentComponent} from './components/buyers-component/buyers-component.component';
import {ProductsComponentComponent} from './components/products-component/products-component.component';
import {BuyersServiceService} from './services/buyers-service.service';


const appRoutes: Routes = [
    { path: '', component: ProductsComponentComponent },
    { path: 'buyers', component: BuyersComponentComponent },
    { path: 'products', component: ProductsComponentComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        NavbarComponent,
        BuyersComponentComponent,
        ProductsComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [
        BuyersServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
