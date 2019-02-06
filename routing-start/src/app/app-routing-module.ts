import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const attRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
    ] },
    { path: 'servers',
    //  canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
      component: ServersComponent,
       children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]  }
    ] },
    // { path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    { path: '**', redirectTo: '/not-found'}
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(attRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}