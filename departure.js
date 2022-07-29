const subscription_key = ""
let req = new Request("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?originUicCode=8400058&destinationUicCode=8400621");
req.method = "get";
req.headers={"Ocp-Apim-Subscription-Key": subscription_key}
const response = await req.loadJSON();

const trips = JSON.parse(response);

single_trip = Object.keys(trips)[1];

console.log(single_trip)
