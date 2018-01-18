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

export default function(state={}, action) {
  console.log("ChangelogReducer was called with state", state, "and action", action);
  
  state.changelog = data;
  switch (action.type) {
    case "@@router/LOCATION_CHANGE" : 
      if (action.payload.pathname === "/about") {
        state.changelog = data;
      }
      return state;
    default:
        return state;
  }
};

