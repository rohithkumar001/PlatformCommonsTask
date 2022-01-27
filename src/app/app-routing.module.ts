import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ApplicationsComponent } from './applications/applications.component';
import { OppurtunitiesComponent } from './oppurtunities/oppurtunities.component';
import { OrgSettingsComponent } from './org-settings/org-settings.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {path: 'analytics', component: AnalyticsComponent },
    {path: 'applications', component: ApplicationsComponent},
    {path: 'oppurtunities', component: OppurtunitiesComponent},
    {path: 'settings', component: OrgSettingsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }