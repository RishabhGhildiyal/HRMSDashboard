import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ASSETS_INVENTORY,
  ATTENDANCE,
  DIRECTORY,
  DSR,
  ENTREPRENEURSHIP,
  EXPLORE,
  FOOD,
  FRESHERS_TRAINING,
  HOME,
  LEAVE,
  MY_LINKS,
  MY_PROFILE,
  PROJECTS,
  RECRUITMENT,
  REFER_A_FRIEND,
  REVIEWS,
  TICKET,
  TRAINING,
} from 'src/app/constants/routes';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: HOME.path,
        loadChildren: () =>
          import('./feature-modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: MY_PROFILE.path,
        loadChildren: () =>
          import('./feature-modules/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: ENTREPRENEURSHIP.path,
        loadChildren: () =>
          import(
            './feature-modules/entrepreneurship/entrepreneurship.module'
          ).then((m) => m.EntrepreneurshipModule),
      },
      {
        path: DIRECTORY.path,
        loadChildren: () =>
          import('./feature-modules/directory/directory.module').then(
            (m) => m.DirectoryModule
          ),
      },
      {
        path: MY_LINKS.path,
        loadChildren: () =>
          import('./feature-modules/my-links/my-links.module').then(
            (m) => m.MyLinksModule
          ),
      },
      {
        path: ATTENDANCE.path,
        loadChildren: () =>
          import('./feature-modules/attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: ASSETS_INVENTORY.path,
        loadChildren: () =>
          import(
            './feature-modules/assets-inventory/assets-inventory.module'
          ).then((m) => m.AssetsInventoryModule),
      },
      {
        path: DSR.path,
        loadChildren: () =>
          import('./feature-modules/dsr/dsr.module').then((m) => m.DsrModule),
      },
      {
        path:LEAVE.path,
        loadChildren:() =>
        import('./feature-modules/leave/leave.module').then((m)=>m.LeaveModule)
      },
      {
        path:REFER_A_FRIEND.path,
        loadChildren:() =>
        import('./feature-modules/refer-a-friend/refer-a-friend.module').then((m)=>m.ReferAFriendModule)
      },
      {
        path:REVIEWS.path,
        loadChildren:() =>
        import('./feature-modules/reviews/reviews.module').then((m)=>m.ReviewsModule)
      },
      {
        path:FRESHERS_TRAINING.path,
        loadChildren:() =>
        import('./feature-modules/freshers-training/freshers-training.module').then((m)=>m.FreshersTrainingModule)
      },
      {
        path:TRAINING.path,
        loadChildren:() =>
        import('./feature-modules/training/training.module').then((m)=>m.TrainingModule)
      },
      {
        path:TICKET.path,
        loadChildren:() => import('./feature-modules/tickets/tickets.module').then((m)=>m.TicketsModule)
      },
      {
        path:PROJECTS.path,
        loadChildren:() => import('./feature-modules/projects/projects.module').then((m)=>m.ProjectsModule)
      },
      {
        path:RECRUITMENT.path,
        loadChildren:() => import('./feature-modules/recruitment/my-interview/my-interview.module').then((m)=>m.MyInterviewModule)
      },
      {
        path:FOOD.path,
        loadChildren: () => import('./feature-modules/food/food.module').then((m)=>m.FoodModule)
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
