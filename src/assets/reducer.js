import init from './initState.js';

const testReducer = (state = init, evt) => {

  // console.log(evt);
  if (evt.action === "UPDATE_USER") {
    state = { ...state, user: evt.type };
  }
  else if (evt.action === "INSERT_COMMENT") {
    // TODO: Implement comment logc for multiple posts
    state.posts[0].comments.push(evt.type);
  }
  else if (evt.action === 'UPDATE_LIKED') {
    // TODO: Implement like logic for multiple posts
    let liked = !state.posts[0].liked;
    state.posts[0] = { ...state.posts[0], liked }
  }

  console.log(state);
  return state;
};

export default testReducer;
