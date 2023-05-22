import { createFeatureSelector } from "@ngrx/store";

export const profile_picture_selector = 'get_profile_picture';

export const getProfilePictureSelector = createFeatureSelector(profile_picture_selector)

export const my_pitch='MY PITCH';
export const myPitchDataSelector = createFeatureSelector(my_pitch);

export const my_training= "MY TRAINING";
export const myTrainingDataSelector = createFeatureSelector(my_training)
