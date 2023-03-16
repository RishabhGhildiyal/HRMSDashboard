export interface Iroute {
  path?: string;
  fullurl?: any;
}


export interface POLICY_DOCUMENTS {
  s_no: any;
  name:string;
  type: string;
  file_size: any;
  last_Modified: string;
  action: any;

}

export interface SHIFT_TABLE {

  DOJ:string;
  office_shift: string;


}


export interface REFERRAL_LIST {
  s_no: any;
  CandidateName:string;
  experience: string;
  department: any;
  position: string;
  date_of_referral: any;
  candidate_status: string;
  resume:string;

}

export interface TRAINING_DETAILS {
  s_no: any;
  topic: string;
  topic_trainer:string;
  trainer_email:string;
  startDate:string;
  endDate:string;
  resource_url:any;
}

export interface SUB_TOPICS {
  s_no: any;
  subTopic: string;
  topic:string;
  topic_trainer:string;
  trainer_email:string;
  startDate:string;
  endDate:string;
  resource_url:any;
}

export interface ATTENDANCE {
  s_no: any;
  topic:string;
  date:string;
  attendance:string;  
}
