import { createReducer, on } from "@ngrx/store";
import { getProfilePicture, myPitchAction, myTrainingAction, referaCandidateAction } from "./action";
import { my_pitch, my_training, picture } from "./state";

export const profilePictureReducer = createReducer(
  picture,on(getProfilePicture, (state, data) => {

    let newImg = data
    return newImg;

  })
);

export const myPitchReducer = createReducer(
  my_pitch,
      on(myPitchAction,(state,data)=>{
        console.log(data,'kjadkazx')
          let newReferFriendData = [...state];
          let referFriendData = {
            sn:newReferFriendData.length+1,
              title:data.empTitle,
              industry:data.industry,
              technical:data.type1,
              submitted_on:'17/05/2023',
              action:'pending'
          }
          newReferFriendData.push(referFriendData);
          return newReferFriendData
      })
)

export const myTrainingReducer = createReducer(
  my_training,
      on(myTrainingAction,(state,data)=>{
        console.log(data,'khkhkhkjjhg')
          let newTrainingData = [...state];
          let myTrainingData = {
            sn:newTrainingData.length+1,
            training_name:data.training,
            timeline:data.objective,
            status:'on going',
              requested_date:'17/05/2023',
              action:'pending'
          }
          newTrainingData.push(myTrainingData);
          return newTrainingData
      })
)

export const referaCandidateReducer = createReducer(
  my_training,
      on(referaCandidateAction,(state,data)=>{
        console.log(data,'khkhkhkjjhg')
          let newTrainingData = [...state];
          let myTrainingData = {
            sn:newTrainingData.length+1,
            training_name:data.training,
            timeline:data.objective,
            status:'on going',
              requested_date:'17/05/2023',
              action:'pending'
          }
          newTrainingData.push(myTrainingData);
          return newTrainingData
      })
)
