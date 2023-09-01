import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes  = [
  {
    path:'product',
    loadChildren: ()=>import('./product/product.module')
      .then(m=>m.ProductModule)
  },
  {
    path:'signals',
    loadChildren: ()=>import('./signal/signal.module')
      .then(m=>m.SignalModule)
  },
  {
    path:'**',
    redirectTo:'product'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
