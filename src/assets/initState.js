/**
 * @description "Local stub for testing"
 */
let stub = {
  user: {
    name: "Aditya Thakur",
    about: "An airhead learning random stuff"
  },
  posts: [{
    timestamp: 1619765165565,
    name: "Vikram Singh",
    // TODO: Replace with CDN link serving static-assets
    image: "https://cdn.pixabay.com/photo/2020/09/02/16/07/lake-5538757_960_720.jpg",
    liked: true,
    content: `The dense forests will soothe all your frustations.
              Try visiting here once...`,
    comments: [
      {
        timestamp: 1619765361778,
        name: "Newton",
        comment: "I'll just pass on this one..."
      }, {
        timestamp: 1619765363778,
        name: "Kepler",
        comment: "Wow! looks great"
      }]
  }]
};

export default stub;
