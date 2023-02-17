import { APPRAISAL, BASICINFO, CHANGEPASSWORD, PROFILEPICTURE, QUALIFICATION, SHIFT } from "src/app/constants/routes";


export const ListItems = [
  { title : 'Basic Information', logo: 'person', routerLink:BASICINFO.path},
  { title : 'Profile Picture', logo: 'camera', routerLink:PROFILEPICTURE.path},
  { title : 'Qualification', logo: 'book', routerLink:QUALIFICATION.path},
  { title : 'Shift', logo: 'person', routerLink:SHIFT.path},
  { title : 'Change Password', logo: 'key', routerLink:CHANGEPASSWORD.path},
  { title : 'Appraisal', logo: 'home', routerLink:APPRAISAL.path},
]
