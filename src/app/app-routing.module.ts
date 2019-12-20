import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule', canActivate: [AuthGuard] },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule', canActivate: [AuthGuard] },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule', canActivate: [AuthGuard] },
  {
    path: 'voters',
    loadChildren: './pages/voters/voters.module#VotersPageModule',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_AGENT', 'ROLE_DIST'] }
  },
  {
    path: 'voter-search-settings',
    loadChildren: './pages/modal/voter-search-settings/voter-search-settings.module#VoterSearchSettingsPageModule',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_AGENT', 'ROLE_DIST'] }
  },
  {
    path: 'voters/:voterPk',
    loadChildren: './pages/voter-detail/voter-detail/voter-detail.module#VoterDetailPageModule',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_AGENT', 'ROLE_DIST'] }
  },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
