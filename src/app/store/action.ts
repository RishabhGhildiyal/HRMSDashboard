import { createAction, props } from "@ngrx/store";

export const getProfilePicture = createAction(
  '{Profile} Profile Picture',
  props<any>()
)

export const myPitchAction = createAction(
  '[my pitch] get data of my pitch ',
  props<any>()
)

export const myTrainingAction = createAction(
  '[my pitch] get data of my pitch ',
  props<any>()
)

export const referaCandidateAction = createAction(
  '[refer a candidate] send data to referral list ',
  props<any>()
)
