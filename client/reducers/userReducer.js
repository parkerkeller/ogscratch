import * as types from '../constants/actionTypes';

const initialState = {
  username: null,
  password: null,
  verified: null,
  error: null,
  needsToSignup: false,
  userCreated: false,
  artRecieved: false,
  art: [],
  googleSignedIn: false
};

const userReducer = (state = initialState, action) => {
  //declared variables to make sure we update state with new state.
  let newVerified;
  let newError;
  let newUsername;
  let newPassword;
  let newNeedsToSignup;
  let newUserCreated;
  let newArtRecieved;
  let newArt;
  let newGoogleSignedIn;

  switch (action.type) {
    case types.GOOGLE_LOGIN:
      newGoogleSignedIn = true;

      return {
        ...state,
        googleSignedIn: newGoogleSignedIn
      }

    case types.FETCH_USER_ACTION:
      console.log('payload', action.payload.value)

      if (action.payload.value) {
        newGoogleSignedIn = true;
      }
      return {
        ...state,
        googleSignedIn: newGoogleSignedIn
      }

    //If you watch STATE in Redux devTools, you will see it update everytime a user types a letter
    case types.LOGIN_USERNAME:
      newUsername = action.payload.value;
      return {
        ...state,
        username: newUsername,
      };
    //If you watch STATE in Redux devTools, you will see it update everytime a user types a letter
    case types.LOGIN_PASSWORD:
      newPassword = action.payload.value;
      return {
        ...state,
        password: newPassword,
      };

    case types.POST_USERNAME_AND_PASSWORD_SUCCESS:
      newVerified = true;
      return {
        ...state,
        verified: newVerified,
        // May need to reset certain areas of state (error, etc.)
        // error: null
      };

    case types.POST_USERNAME_AND_PASSWORD_FAILURE:
      newVerified = false;
      //coordinate with backend re err sent back from server//
      newError = action.payload.payload.response.data.error;
      return {
        ...state,
        verified: newVerified,
        error: newError,
      };

    case types.SIGNUP:
      newNeedsToSignup = action.payload;
      return {
        ...state,
        needsToSignup: newNeedsToSignup,
      };

    case types.POST_CREATE_USER_SUCCESS:
      newUserCreated = true;
      return {
        ...state,
        userCreated: newUserCreated,
      };

    case types.POST_CREATE_USER_FAILURE:
      return {
        ...state,
      };

    case types.POST_GET_ART_SUCCESS:
      newArtRecieved = true;
      newArt = action.payload.payload
      // console.log('this is newArt ', newArt)
      //We actually do the below mapping in component HOME, this code below may be unneccessary 
      // const newArtParsed = newArt.map(el => {
      //   return (
      //     <div className="artUnit">
      //       <img src={el.image} style={{ height: 100 }}></img>
      //       <p className="unitTitle">{el.title}</p>
      //       <p>Artist: {el.artist}</p>
      //       <p>Description: {el.description}</p>
      //       <p>Material: {el.material}</p>
      //       <p>Price: {el.price}</p>
      //     </div>
      //   )
      // })

      return {
        ...state,
        artRecieved: newArtRecieved,
        art: newArt,
      };

    case types.POST_GET_ART_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default userReducer;