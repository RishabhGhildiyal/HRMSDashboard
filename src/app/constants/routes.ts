import { Iroute } from "../interfaces/interface";


export const AUTH : Iroute = {
  path:'auth',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const LOGIN : Iroute = {
  path:'login',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const FORGET_PASSWORD : Iroute = {
  path:'forget-password',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const DASHBOARD : Iroute = {
  path:'dashboard',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const HOME : Iroute = {
  path:'home',
  get fullurl(): string {
    return `/${this.path}`;
  },
}


export const MY_PROFILE : Iroute = {
  path:'my-profile',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const BASICINFO: Iroute={
  path:'basic-info',
  get fullurl(){
    return `/${this.path}`
  }
}

export const PROFILEPICTURE: Iroute={
  path:'profile-picture',
  get fullurl(){
    return `/${this.path}`
  }
}

export const QUALIFICATION: Iroute={
  path:'qualification',
  get fullurl(){
    return `/${this.path}`
  }
}

export const SHIFT: Iroute={
  path:'shift',
  get fullurl(){
    return `/${this.path}`
  }
}

export const APPRAISAL: Iroute={
  path:'appraisal',
  get fullurl(){
    return `/${this.path}`
  }
}

export const CHANGEPASSWORD: Iroute={
  path:'change-password',
  get fullurl(){
    return `/${this.path}`
  }
}

export const EXPLORE: Iroute={
  path:'explore',
  get fullurl(): string{
    return `/${this.path}`
  }
}

export const DIRECTORY: Iroute={
  path:'directory',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const ATTENDANCE_CALENDER: Iroute={
  path:'attendance/attendance-calender',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MANUAL_PUNCH: Iroute={
  path:'attendance/manual-punch',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const PUNCH_LOG: Iroute={
  path:'attendance/punch-log',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const ASSET_DECLARATION: Iroute={
  path:'assets-inventory/asset-declaration',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MY_ASSETS_INVENTORY: Iroute={
  path:'assets-inventory/my-assets-inventory',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const REQUEST_ASSET: Iroute={
  path:'assets-inventory/request-asset',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const DSR: Iroute={
  path:'dsr/my-dsr',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const SALARY_SLIP: Iroute={
  path:'finance/salary-slip',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MY_TRAININGS: Iroute={
  path:'freshers-trainings/my-trainings',
  get fullurl():string{
    return `/${this.path}`
  }
}
export const FLOATING_LEAVE: Iroute={
  path:'leave/floating-leave',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MY_LEAVE : Iroute={
  path:'leave/my-leave',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const HOLIDAY_CALENDER : Iroute={
  path:'my-links/holiday-calender',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const INSURANCE_VERIFICATION_DETAILS : Iroute={
  path:'my-links/insurance-verification-details',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const POLICY_DOCUMENTS : Iroute={
  path:'my-links/policy-documents',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const PROJECTS : Iroute={
  path:'projects',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const RECRUITMENT : Iroute={
  path:'my-interview',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const REFER_A_FRIEND : Iroute={
  path:'refer-a-friend/job-openings',
  get fullurl():string{
    return `/${this.path}`
  }
}
export const REFERRAL_LIST : Iroute={
  path:'refer-a-friend/referral-list',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MYPERFORMANCE : Iroute={
  path:'reviews/my-performance',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const TICKETS : Iroute={
  path:'user/tickets',
  get fullurl():string{
    return `/${this.path}`
  }
}
export const MY_TRAINING : Iroute={
  path:'training/my-trainings',
  get fullurl():string{
    return `/${this.path}`
  }
}
export const ONGOING_TRAININGS : Iroute={
  path:'training/ongoing-trainings',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const REQUESTED_TRAININGS : Iroute={
  path:'training/requested-training',
  get fullurl():string{
    return `/${this.path}`
  }
}
export const UPCOMING_TRAININGS : Iroute={
  path:'training/upcoming-trainings',
  get fullurl():string{
    return `/${this.path}`
  }
}























/*
interface Iroute{
  path:string
  fullUrl:string
}

export const ACCOUNT:Iroute ={
  path:'account',
  get fullUrl(){
    return `/${this.path}`;
  }
}

export const LAYOUT:Iroute ={
  path:'layout',
  get fullUrl(){
    return `/${this.path}`
  }
}

export const LOGIN:Iroute ={
  path:'login',
  get fullUrl(){
    return `/${this.path}`
  }
}

export const FORGETPASSWORD: Iroute ={
path:'forget-password',
get fullUrl(){
  return `/${this.path}`
}
}

  export const HOME: Iroute ={
    path:'home',
    get fullUrl(){
      return `/${this.path}`
    }
  }

  /**
   * @description My profile module routes and Sub module routes
   */



  /** export const MYPROFILE: Iroute ={
    path: 'my-profile',
    get fullUrl(){
      return `/${this.path}`
    }
  }

  export const BASICINFO: Iroute={
    path:'basic-info',
    get fullUrl(){
      return `/${this.path}`
    }
  }

  export const PROFILEPIC: Iroute={
    path:'profile-pic',
    get fullUrl(){
      return `/${this.path}`
    }
  }

  export const QUALIFICATION: Iroute={
    path:'qualification',
    get fullUrl(){
      return `/${this.path}`
    }
  }

  export const SHIFT: Iroute={
    path:'shift',
    get fullUrl(){
      return `/${this.path}`
    }
  }

  export const CHANGEPASSWORD: Iroute={
    path:'change-password',
    get fullUrl(){
      return `/${this.path}`
    }
  }
  export const APPRAISAL: Iroute={
    path:'appraisal',
    get fullUrl(){
      return `/${this.path}`
    }
  }
*/



