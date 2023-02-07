
export const AUTH : any = {
  path:'auth',
  get fullurl(): string {
    return `/${this.path}`;
  },
}
export const FORGET_PASSWORD : any = {
  path:'forget-password',
  get fullurl(): string {
    return `${AUTH.fullurl}/${this.path}`;
  },
}

export const DASHBOARD : any = {
  path:'dashboard',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const LOGIN : any = {
  path:'login',
  get fullurl(): string {
    return `/${this.path}`;
  },
}
