const subscription_key = ""
let req = new Request("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?originUicCode=8400058&destinationUicCode=8400621");
req.method = "get";
req.headers={"Ocp-Apim-Subscription-Key": subscription_key}
const response = await req.loadJSON();

for (const trip in response['trips']) {
  var leg = trip['legs'][0]
  var origin = leg['origin'].name
  var destination = leg['destination'].name
  var departuretime = leg.origin.actualDateTime 
  console.log(`${origin}: ${destination} : ${departuretime}`);
}
