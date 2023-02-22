import {DIRECTORY, EXPLORE, HOME, MY_PROFILE } from "../../../../constants/routes"


export const sideNavList = [
  { title: 'Home', logo: 'home', isActive: true, routerLink:HOME.path},
  { title: 'My Profile', logo: 'person', isActive: true, routerLink:MY_PROFILE.path},
  { title: 'Directory', logo: 'description',isActive: true, routerLink:DIRECTORY.path },
  { title: 'Entrepreneurship Program', logo: 'person', options: [{ subTitle: 'Explore',routerLink:EXPLORE.path ,subLogo: 'horizontal_rule' }], isActive: true, },
  { title: 'My Links', logo: 'grid_view', options: [{ subTitle: 'Insurance Verification Details', subLogo: 'checklist' }], isActive: true, },
  { title: 'Finance', logo: 'payments', options: [], isActive: true, },
  { title: 'Reviews', logo: 'grid_view', options: [{ subTitle: 'My Performance', subLogo: 'checklist' }], isActive: true, },
  { title: 'Refer a Friend', logo: 'groups', options: [], isActive: true, },
  { title: 'Freshers Training', logo: 'school', options: [], isActive: true, },
  { title: 'Training', logo: 'school', options: [], isActive: true, },
  { title: 'Assests Inventory', logo: 'science', options: [], isActive: true, },
  { title: 'Attendance', logo: 'schedule', options: [], isActive: true, },
  { title: 'Leave', logo: 'calendar_today', options: [], isActive: true, },
  { title: 'Tickets', logo: 'view_day', options: [], isActive: true, },
  { title: 'DSR', logo: 'calendar_today', options: [], isActive: true, },
  { title: 'Projects', logo: 'view_day', isActive: true, },
  { title: 'Expense', logo: 'monetization_on', isActive: false, },
  { title: 'Announcements', logo: 'campaign', isActive: false, },
  { title: 'Travels', logo: 'flight', isActive: false, },
  { title: 'Logout', logo: 'logout', isActive: true, },
]
