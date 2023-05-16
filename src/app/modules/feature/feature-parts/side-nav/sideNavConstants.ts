import {
  ASSET_DECLARATION,
  ATTENDANCE_CALENDER,
  DIRECTORY,
  EXPLORE,
  FLOATING_LEAVE,
  HOLIDAY_CALENDER,
  HOME,
  INSURANCE_VERIFICATION_DETAILS,
  JOB_OPENINGS,

  MANUAL_PUNCH,
  MY_ASSETS_INVENTORY,
  MY_DSR,
  MY_LEAVE,
  MY_PERFORMANCE,
  MY_PROFILE,
  MY_TRAINING,
  MY_TRAININGS,
  ONGOING_TRAININGS,
  POLICY_DOCUMENTS,
  PROJECTS,
  PUNCH_LOG,
  PURCHASE_LUNCH_COUPON,
  RECRUITMENT,
  REFERRAL_LIST,
  REQUESTED_TRAININGS,
  REQUEST_ASSET,
  REQUEST_DINNER,
  TICKETS,
  UPCOMING_TRAININGS,
} from '../../../../constants/routes';

export const sideNavList = [
  { title: 'Home', logo: 'home', isActive: true, routerLink: HOME.path },
  {
    title: 'My Profile',
    logo: 'person',
    isActive: true,
    routerLink: MY_PROFILE.path,
  },
  {
    title: 'Directory',
    logo: 'description',
    isActive: true,
    routerLink: DIRECTORY.path,
    circle:true
  },
  {
    title: 'Food',
    logo: 'grid_view',
    options: [
      {
        subTitle: 'Lunch Coupon',
        subLogo: 'horizontal_rule',
        routerLink: 'food',
      },
      {
        subTitle: 'Request Dinner',
        subLogo: 'horizontal_rule',
        routerLink: REQUEST_DINNER.fullurl,
      },
    ],
    isActive: true,
    circle:true

  },

  {
    title: 'Entrepreneurship Program',
    logo: 'person',
    options: [
      {
        subTitle: 'Explore',
        routerLink: EXPLORE.fullurl,
        subLogo: 'horizontal_rule',
      },
    ],
    isActive: true,
  },
  {
    title: 'My Links',
    logo: 'grid_view',
    options: [
      {
        subTitle: 'Insurance Verification Details',
        subLogo: 'horizontal_rule',
        routerLink: HOME.path,
      },
      {
        subTitle: 'Holiday Calender 2023',
        subLogo: 'horizontal_rule',
        routerLink: HOLIDAY_CALENDER.fullurl,
      },
      {
        subTitle: 'Policy Documents',
        subLogo: 'horizontal_rule',
        routerLink: POLICY_DOCUMENTS.fullurl,
      },
    ],
    isActive: true,
    circle:true

  },
  { title: 'Finance', logo: 'payments', options: [], isActive: true },
  {
    title: 'Reviews',
    logo: 'grid_view',
    options: [
      {
        subTitle: 'My Performance',
        subLogo: 'checklist',
        routerLink: MY_PERFORMANCE.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Refer a Friend',
    logo: 'groups',
    options: [
      {
        subTitle: 'Job Openings',
        subLogo: 'horizontal_rule',
        routerLink: JOB_OPENINGS.fullurl,
      },
      {
        subTitle: 'Referral List',
        subLogo: 'horizontal_rule',
        routerLink: REFERRAL_LIST.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Recruitment',
    logo: 'school',
    options: [
      {
        subTitle: 'My Interview',
        routerLink: RECRUITMENT.fullurl,
        subLogo: 'horizontal_rule',
      },
    ],
    isActive: true,
  },
  {
    title: 'Freshers Training',
    logo: 'school',
    options: [
      {
        subTitle: 'My Trainings',
        routerLink: MY_TRAININGS.fullurl,
        subLogo: 'horizontal_rule',
      },
    ],
    isActive: true,
  },
  {
    title: 'Training',
    logo: 'school',
    options: [
      {
        subTitle: 'Upcoming Trainings',
        subLogo: 'horizontal_rule',
        routerLink: UPCOMING_TRAININGS.fullurl,
      },
      {
        subTitle: 'Ongoing Trainings',
        subLogo: 'horizontal_rule',
        routerLink: ONGOING_TRAININGS.fullurl,
      },
      {
        subTitle: 'My Trainings',
        subLogo: 'horizontal_rule',
        routerLink: MY_TRAINING.fullurl,
      },
      {
        subTitle: 'Requested Trainings',
        subLogo: 'horizontal_rule',
        routerLink: REQUESTED_TRAININGS.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Assests Inventory',
    logo: 'science',
    options: [
      {
        subTitle: 'My Assets Inventory',
        subLogo: 'horizontal_rule',
        routerLink: MY_ASSETS_INVENTORY.fullurl,
      },
      {
        subTitle: 'Request Asset',
        subLogo: 'horizontal_rule',
        routerLink: REQUEST_ASSET.fullurl,
      },
      {
        subTitle: 'Assets Declaration',
        subLogo: 'horizontal_rule',
        routerLink: ASSET_DECLARATION.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Attendance',
    logo: 'schedule',
    options: [
      {
        subTitle: 'Attendance Calender',
        subLogo: 'horizontal_rule',
        routerLink: ATTENDANCE_CALENDER.fullurl,
      },
      {
        subTitle: 'Manual Punch',
        subLogo: 'horizontal_rule',
        routerLink: MANUAL_PUNCH.fullurl,
      },
      {
        subTitle: 'Punch Log',
        subLogo: 'horizontal_rule',
        routerLink: PUNCH_LOG.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Leave',
    logo: 'calendar_today',
    options: [
      {
        subTitle: 'My Leave',
        subLogo: 'horizontal_rule',
        routerLink: MY_LEAVE.fullurl,
      },
      {
        subTitle: 'Floating Leave',
        subLogo: 'horizontal_rule',
        routerLink: FLOATING_LEAVE.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Tickets',
    logo: 'view_day',
    options: [
      {
        subTitle: 'Tickets',
        routerLink: TICKETS.fullurl,
        subLogo: 'horizontal_rule',
      },
    ],
    isActive: true,
  },
  {
    title: 'DSR',
    logo: 'calendar_today',
    options: [
      {
        subTitle: 'My Dsr',
        routerLink: MY_DSR.fullurl,
        subLogo: 'horizontal_rule',
      },
    ],
    isActive: true,
  },
  {
    title: 'Projects',
    logo: 'view_day',
    routerLink: PROJECTS.path,
    isActive: true,
  },
  { title: 'Expense', logo: 'monetization_on', isActive: false },
  { title: 'Announcements', logo: 'campaign', isActive: false },
  { title: 'Travels', logo: 'flight', isActive: false },
  { title: 'Logout', logo: 'logout', isActive: true },
  // { title: 'Logout', logo: 'logout', isActive: true, },
];

// import { CALENDER, DIRECTORY, EXPLORE, HOME, INSURANCE, MYPROFILE, POLICYDOC } from "src/app/constants/routes";

// interface sideNavListType{
//   title:string,logo:string,isActive:boolean,routerLink?:string,options?:Array<any>
// }
// export const sideNavList:Array<sideNavListType> = [
//   { title: 'Home', logo: 'home', isActive: true,routerLink:HOME.path},
//   { title: 'My Profile', logo: 'person', isActive: true,routerLink:MYPROFILE.path},
//   { title: 'Directory', logo: 'description', isActive: true,routerLink:DIRECTORY.path},
//   { title: 'Enterpreneurship Program', logo: 'person', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' ,routerLink:EXPLORE.path}], isActive: true, },
//   { title: 'My Links', logo: 'grid_view', options:
//    [{ subTitle: 'Insurance Verification Details', subLogo: 'horizontal_rule',routerLink:INSURANCE.path},
//    {subTitle:"Holiday Calender 2023", subLogo:'horizontal_rule',routerLink:CALENDER.path},
//    {subTitle:"Policy Documents", subLogo:'horizontal_rule',routerLink:POLICYDOC.path}
//   ], isActive: true },
//   { title: 'Finance', logo: 'payments', options: [{subTitle:'Salary slip',subLogo:'horizontal_rule'},
//   {subTitle:"Form 16", subLogo:'horizontal_rule'},
//   {subTitle:"Investment Declaration", subLogo:'horizontal_rule'}],isActive: true,},
//   { title: 'Reviews', logo: 'grid_view', options: [{subTitle:"My Performance", subLogo:'horizontal_rule'}], isActive: true, },
//   { title: 'Refer a Friend', logo: 'groups', options: [], isActive: true, },
//   { title: 'Freshers Training', logo: 'school', options: [], isActive: true, },
//   { title: 'Training', logo: 'school', options: [], isActive: true, },
//   { title: 'Assests Inventory', logo: 'science', options: [], isActive: true, },
//   { title: 'Attendance', logo: 'schedule', options: [], isActive: true, },
//   { title: 'Leave', logo: 'calendar_today', options: [], isActive: true, },
//   { title: 'Tickets', logo: 'view_day', options: [], isActive: true, },
//   { title: 'DSR', logo: 'calendar_today', options: [], isActive: true, },
//   { title: 'Projects', logo: 'view_day', isActive: true, },
//   { title: 'Expense', logo: 'monetization_on', isActive: false, },
//   { title: 'Announcements', logo: 'campaign', isActive: false, },
//   { title: 'Travels', logo: 'flight', isActive: false, },
//   { title: 'Logout', logo: 'logout', isActive: true, },
// ]
