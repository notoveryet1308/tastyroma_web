const INITIAL_STATE = {
  isOpen: false
}

export const sideBar = (state=INITIAL_STATE, action)=>{
  const {type} = action;
  switch(type){
    case 'OPEN_SIDEMENU':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default: 
      return state;
  }
}