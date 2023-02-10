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



