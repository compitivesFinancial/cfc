import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboarddetailsComponent } from './Pages/dashboarddetails/dashboarddetails.component';
import { HomeComponent } from './Pages/Home/home.component';
import { NewHomeComponent } from './Pages/NewHome/home.component';
import { authGuard } from './Shared/Services/authGuard.service';
import { noLoggedIn } from './Shared/Services/noLoggedIn';

const routes: Routes = [
  {
    path:'',
    component:NewHomeComponent,
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:DashboarddetailsComponent,
    canActivate:[authGuard]
  },
 
  {
    path: '',
    loadChildren: () => import('./Pages/Login/login.module').then(m => m.LoginModule),
    canActivate:[noLoggedIn]
  },

  {
    path: '',
    loadChildren: () => import('./Pages/Registration/registration.module').then(m => m.RegistrationModule),
    canActivate:[noLoggedIn]

  },

  {
    path: '',
    loadChildren: () => import('./Pages/setting/setting.module').then(m => m.SettingModule),
    canActivate:[authGuard]

  },

  {
    path: '',
    loadChildren: () => import('./Pages/KYC/AddKyc/add-kyc.module').then(m => m.AddKYCModule),
    canActivate:[authGuard]

  },
  {
    path: '',
    loadChildren: () => import('./Pages/CampaignDetails/AddCampaign/add-campaign.module').then(m => m.AddCampaignModule),
    canActivate:[authGuard]

  },
 
  {
    path: '',
    loadChildren: () => import('./Pages/Thankyou/thank-you.module').then(m => m.ThankYouModule),
  },

  {
    path: '',
    loadChildren: () => import('./Pages/Statements/statements.module').then(m => m.StatementsModule),
  },
  {
    path: '',
    loadChildren: () => import('./Pages/Profits/profits.module').then(m => m.ProfitsModule),
  },
  {
    path: '',
    loadChildren: () => import('./Pages/Profile/profile.module').then(m => m.profileModule),
  },
  {
    path: '',
    loadChildren: () => import('./Pages/Profile/investor-wallet/investor-wallet.module').then(m => m.InvestorWalletModule),
  },

  {
    path: '',
    loadChildren: () => import('./Pages/QuickLink/quick-link.module').then(m => m.QuickLinkModule),
  },
  {
    path: '',
    loadChildren: () => import('./Pages/TermsAndConditions/quick-link.module').then(m => m.QuickLinkModule),
  },
  {
    path: '',
    loadChildren: () => import('./Pages/PrivacyPolicy/quick-link.module').then(m => m.QuickLinkModule),
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./Pages/CampaignDetails/UserCampaignDetails/user-campaign-details.module').then(m => m.UserCampaignDetailsModule),
  // },
  {
    path: '',
    loadChildren: () => import('./Pages/Profile/ActiveWallet/ActiveWalletList/active-wallet-list.module').then(m => m.ActiveWalletListModule),
  },
  {
    path: '',
    loadChildren: () => import('./Pages/Profile/ActiveWallet/ActiveWalletDetails/active-wallet-details.module').then(m => m.ActiveWalletDetailsModule),
  },
  {
      path: '**',
      redirectTo:'/'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  }),
  
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
