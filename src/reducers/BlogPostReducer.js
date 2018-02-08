export default function(state={}, action) {
    // console.log("Blogpostreducer was called with state", state, "and action", action);

    switch (action.type) {
        default:
            return state;
    }

    // return [
    //     {
    //         "id": 1,
    //         "title": "Writing React Apps",
    //         "content": "Some data inside, this is an awesome way to build content  <code>int main() {\nprintln(\"hello world\");\nreturn 0;\n}</code><pic src=\"https://cdn.vox-cdn.com/thumbor/8DobR8fCo7liCPtNtz7Tf1vuZN4=/0x0:5010x3516/1200x800/filters:focal(2225x1106:3025x1906)/cdn.vox-cdn.com/uploads/chorus_image/image/54617881/619016576.0.jpg\" /> Some more data.",
    //     },  
    // ]
}
