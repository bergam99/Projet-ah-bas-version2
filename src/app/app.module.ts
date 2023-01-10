import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalComponent } from './pages/journal/journal.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { PolitiqueComponent } from './pages/politique/politique.component';
import { MentionComponent } from './pages/mention/mention.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AchatComponent } from './pages/achat/achat.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProposComponent } from './pages/propos/propos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { PaiementFormComponent } from './components/paiement-form/paiement-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaiementSuccessComponent } from './pages/paiement-success/paiement-success.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ButtonFinaliserMaCommandeComponent } from './components/buttons/button-finaliser-ma-commande/button-finaliser-ma-commande.component';
import { ButtonParMailComponent } from './components/buttons/button-par-mail/button-par-mail.component';
import { ButtonParTelephoneComponent } from './components/buttons/button-par-telephone/button-par-telephone.component';
import { ButtonPlusComponent } from './components/buttons/buttons-quantity/button-plus/button-plus.component';
import { ButtonMoinsComponent } from './components/buttons/buttons-quantity/button-moins/button-moins.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { BackButtonComponent } from './components/buttons/back-button/back-button.component';
import { ProductDetailsPhotosComponent } from './components/product-details-photos/product-details-photos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalComponent,
    CgvComponent,
    PolitiqueComponent,
    MentionComponent,
    PanierComponent,
    AchatComponent,
    ContactComponent,
    ProposComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    PaiementComponent,
    PaiementFormComponent,
    PaiementSuccessComponent,
  ProductDetailsComponent,
    ButtonFinaliserMaCommandeComponent,
    ButtonParMailComponent,
    ButtonParTelephoneComponent,
    ButtonPlusComponent,
    ButtonMoinsComponent,
    ProductsComponent,
    BackButtonComponent,
    ProductDetailsPhotosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

