const subscription_key = ""
let req = new Request("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?originUicCode=8400058&destinationUicCode=8400621&dateTime=2022-07-29 14:52:00");
req.method = "get";
req.headers={"Ocp-Apim-Subscription-Key": subscription_key}
const response = await req.loadJSON();

console.log(response)
