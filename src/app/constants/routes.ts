import { Iroute } from "../interfaces/interface";


//  *  @description account routes


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


// /**
//  * @description Layout routes
// */

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

// /**@description My profile parts routes */


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

//  * @description Layout routes

export const ENTREPRENEURSHIP: Iroute={
  path:'entrepreneurship',
  get fullurl(): string{
    return `${DASHBOARD.fullurl}/${this.path}`
  }
}

export const EXPLORE: Iroute={
  path:'explore',
  get fullurl(): string{
    return `${ENTREPRENEURSHIP.fullurl}/${this.path}`
  }
}

export const ADD_PITCH: Iroute={
  path:'add-pitch',
  get fullurl(): string{
    return `${EXPLORE.fullurl}/${this.path}`
  }
}




export const DIRECTORY: Iroute={
  path:'directory',
  get fullurl():string{
    return `/${this.path}`
  }
}

// /**@description Attendance parts routes */

export const ATTENDANCE: Iroute={
  path:'attendance',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const ATTENDANCE_CALENDER: Iroute={
  path:'attendance-calender',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${ATTENDANCE.fullurl}/${this.path}`
  }
}

export const MANUAL_PUNCH: Iroute={
  path:'attendance/manual-punch',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${ATTENDANCE.fullurl}/${this.path}`
  }
}

export const PUNCH_LOG: Iroute={
  path:'attendance/punch-log',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${ATTENDANCE.fullurl}/${this.path}`
  }
}

// /**@description Assets Inventory parts routes */

export const ASSETS_INVENTORY: Iroute={
  path:'assets-inventory',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const ASSET_DECLARATION: Iroute={
  path:'asset-declaration',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${ASSETS_INVENTORY.fullurl}/${this.path}`
  }
}

export const MY_ASSETS_INVENTORY: Iroute={
  path:'assets-inventory/my-assets-inventory',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${ASSETS_INVENTORY.fullurl}/${this.path}`
  }
}

export const REQUEST_ASSET: Iroute={
  path:'assets-inventory/request-asset',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${ASSETS_INVENTORY.fullurl}/${this.path}`
  }
}



export const DSR: Iroute={
  path:'dsr',
  get fullurl():string{
    return `/${this.path}`
  }
}
export const MY_DSR: Iroute={
  path:'my-dsr',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${DSR.fullurl}/${this.path}`
  }
}

export const SALARY_SLIP: Iroute={
  path:'finance/salary-slip',
  get fullurl():string{
    return `/${this.path}`
  }
}

// /**@description Training routes */


export const TRAINING: Iroute={
  path:'training',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MY_TRAINING: Iroute={
  path:'my-training',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${TRAINING.fullurl}/${this.path}`
  }
}

export const ONGOING_TRAININGS : Iroute={
  path:'ongoing-trainings',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${TRAINING.fullurl}/${this.path}`
  }
}

export const REQUESTED_TRAININGS : Iroute={
  path:'training/requested-training',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${TRAINING.fullurl}/${this.path}`
  }
}
export const UPCOMING_TRAININGS : Iroute={
  path:'training/upcoming-trainings',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${TRAINING.fullurl}/${this.path}`
  }
}

// /**@description Leave parts routes */

export const LEAVE : Iroute={
  path:'leave',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const FLOATING_LEAVE: Iroute={
  path:'leave/floating-leave',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${LEAVE.fullurl}/${this.path}`
  }
}

export const MY_LEAVE : Iroute={
  path:'leave/my-leave',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${LEAVE.fullurl}/${this.path}`
  }
}

// /**@description My Links parts routes */

export const MY_LINKS : Iroute={
  path:'my-links',
  get fullurl():string{
    return `/${this.path}`
  }
}


export const HOLIDAY_CALENDER : Iroute={
  path:'holiday-calender',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${MY_LINKS.fullurl}/${this.path}`
  }
}

export const INSURANCE_VERIFICATION_DETAILS : Iroute={
  path:'insurance-verification-details',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${MY_LINKS.fullurl}/${this.path}`
  }
}

export const POLICY_DOCUMENTS : Iroute={
  path:'policy-documents',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${MY_LINKS.fullurl}/${this.path}`
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

// /**@description Refer a friend parts routes */
export const REFER_A_FRIEND : Iroute={
  path:'refer-a-friend',
  get fullurl():string{
    return `/${this.path}`
  }
}


export const JOB_OPENINGS : Iroute={
  path:'job-openings',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${REFER_A_FRIEND.fullurl}/${this.path}`
  }
}
export const REFERRAL_LIST : Iroute={
  path:'referral-list',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${REFER_A_FRIEND.fullurl}/${this.path}`
  }
}



export const REVIEWS : Iroute={
  path:'reviews',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MY_PERFORMANCE : Iroute={
  path:'my-performance',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${REVIEWS.fullurl}/${this.path}`
  }
}

export const TICKET : Iroute={
  path:'tickets',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const TICKETS : Iroute={
  path:'tickets',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${TICKET.fullurl}/${this.path}`
  }
}

// /**@description Freshers Training parts routes */

export const FRESHERS_TRAINING : Iroute={
  path:'freshers-training',
  get fullurl():string{
    return `/${this.path}`
  }
}

export const MY_TRAININGS : Iroute={
  path:'my-trainings',
  get fullurl():string{
    return `/${DASHBOARD.fullurl}/${FRESHERS_TRAINING.fullurl}/${this.path}`
  }
}










/*

/**
 *  @description account routes
 */

// interface Iroutes{
//   path:string
//   fullUrl:string
// }
// export const ACCOUNT:Iroutes  = {
//   path: 'account',
//   get fullUrl(){
//     return `/${this.path}`;
//   },
// };
// export const LOGIN:Iroutes= {
//   path: 'login',
//   get fullUrl(){
//     return `${ACCOUNT.fullUrl}/${this.path}`;
//   },



// };
// export const FORGETPASSWORD: Iroutes = {
//   path: 'reset',
//   get fullUrl(){
//     return `${ACCOUNT.fullUrl}/${this.path}`;
//   },

// };

// /**
//  * @description Layout routes
// */
// export const LAYOUT: Iroutes = {
//   path: 'layout',
//   get fullUrl(){
//     return `/${this.path}`;
//   },
// };

// export const HOME: Iroutes = {
//   path: 'home',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };

// export const DIRECTORY: Iroutes = {
//   path: 'directory',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };
// export const EXPLORE: Iroutes = {
//   path: 'explore',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },
// };
// export const MYPERFORMANCE: Iroutes = {
//   path: 'my-performance',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };

// /**@description My Links parts routes */




// export const INSURANCE: Iroutes = {
//   path: 'insurance',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };
// export const CALENDER: Iroutes = {
//   path: 'calender',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };
// export const POLICYDOC: Iroutes = {
//   path: 'policy-doc',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };


// /**@description Myprofile  routes */

// export const MYPROFILE: Iroutes = {
//   path: 'my-profile',
//   get fullUrl(){
//     return `${LAYOUT.fullUrl}/${this.path}`;
//   },

// };

// /**@description My profile parts routes */

// export const BASICINFO: Iroutes = {
//   path: 'basic-info',
//   get fullUrl(){
//     return `${MYPROFILE.fullUrl}/${this.path}`;
//   },

// };

// export const PROFILEPICTURE: Iroutes = {
//   path: 'profile-picture',
//   get fullUrl(){
//     return `${MYPROFILE.fullUrl}/${this.path}`;
//   },

// };

// export const SHIFT: Iroutes = {
//   path: 'shift',
//   get fullUrl(){
//     return `/${MYPROFILE.fullUrl}/${this.path}`;
//   },

// };

// export const QUALIFICATION: Iroutes = {
//   path: 'qualification',
//   get fullUrl(){
//     return `/${MYPROFILE.fullUrl}/${this.path}`;
//   },

// };
// export const CHANGEPASSWORD: Iroutes = {
//   path: 'change-password',
//   get fullUrl(){
//     return `/${MYPROFILE.fullUrl}/${this.path}`;
//   },

// };

// export const APPRAISAL: Iroutes = {
//   path: 'appraisal',
//   get fullUrl(){
//     return `/${MYPROFILE.fullUrl}/${this.path}`;
//   },

// };



















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



