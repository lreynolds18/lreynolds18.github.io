const data = [
  {
    id: "1",
    url: "",
    date: "12/2/18", 
    text: "Connected to facebook", 
    importance: "low"
  },
  {
    id: "2",
    url: "",
    date: "12/2/18", 
    text: "Connected to facebook", 
    importance: "low"
  },
  {
    id: "3",
    url: "",
    date: "12/2/18", 
    text: "Connected to facebook", 
    importance: "low"
  },
  {
    id: "4",
    url: "www.google.com",
    date: "12/2/18", 
    text: "Connected to google", 
    importance: "low"
  },
  {
    id: "4",
    url: "www.google.com",
    date: "12/2/18", 
    text: "Connected to google", 
    importance: "low"
  },
];

const ChangelogReducer = (state={}, action) => {
  console.log("ChangelogReducer was called with state", state, "and action", action);
  
  switch (action.type) {
    default:
      state.changelog = data;
      return state;
  }
};

export default ChangelogReducer;

export const getChangelog = (changelog, filter) => {
  // console.log("here", changelog, filter);
  switch (filter) {
    case 'all':
      return changelog;
    case 'recent':
      if (changelog.length > 10) {
        return changelog.slice(0, 10);
      }
      return changelog;
    default:
      throw new Error("Unknown filter: " + filter + ".");
  }
};
