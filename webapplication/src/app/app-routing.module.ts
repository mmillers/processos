import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: 'lawsuits', loadChildren: () => import('./lawsuits/lawsuits.module').then(m => m.LawsuitsModule) },
	{ path: '**', loadChildren: () => import('./lawsuits/lawsuits.module').then(m => m.LawsuitsModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
