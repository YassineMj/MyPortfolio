import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenuProjetComponent } from './contenu-projet/contenu-projet.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [

    { path: 'contenu-projet', component: ContenuProjetComponent },
    { path: '', component: PortfolioComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
