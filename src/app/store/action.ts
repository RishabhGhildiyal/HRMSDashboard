import { createAction, props } from "@ngrx/store";

export const getProfilePicture = createAction(
  '{Profile} Profile Picture',
  props<any>()
)

export const myPitchAction = createAction(
  '[my pitch] get data of rmy pitch ',
  props<any>()
)

export const myTrainingAction = createAction(
  '[my pitch] get data of rmy pitch ',
  props<any>()
)
