import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  { path: 'hyperlinks', component: HyperlinkComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchBar', component: SearchBarComponent },
 // { path: '', redirectTo: '/hyperlinks', pathMatch: 'full' }, // Redirect to hyperlinks component by default
  //{ path: '**', redirectTo: '/hyperlinks' } // Redirect to hyperlinks component for any other invalid route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
