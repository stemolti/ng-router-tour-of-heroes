import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './features/crisis-list/crisis-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HeroesModule } from './features/heroes/heroes.module';


/**
 * Module imports order
 * Notice that in the module imports array, the AppRoutingModule is last and comes after the HeroesModule.
 */
@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule,HeroesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
