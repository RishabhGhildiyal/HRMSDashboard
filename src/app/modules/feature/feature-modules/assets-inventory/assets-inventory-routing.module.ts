import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASSET_DECLARATION, MY_ASSETS_INVENTORY, REQUEST_ASSET } from 'src/app/constants/routes';
import { AssetsInventoryComponent } from './assets-inventory.component';

const routes: Routes = [
  {
    path:'', component:AssetsInventoryComponent
  },
  {
    path:ASSET_DECLARATION.path,
    loadChildren:() => import('./asset-declaration/asset-declaration.module').then((m)=>m.AssetDeclarationModule)
  },
  {
    path:MY_ASSETS_INVENTORY.path,
    loadChildren:() => import('./my-assets-inventory/my-assets-inventory.module').then((m)=>m.MyAssetsInventoryModule)
  },
  {
    path:REQUEST_ASSET.path,
    loadChildren:() => import('./request-asset/request-asset.module').then((m)=>m.RequestAssetModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsInventoryRoutingModule { }
