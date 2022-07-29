const subscription_key = ""
let req = new Request("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?originUicCode=8400058&destinationUicCode=8400621");
req.method = "get";
req.headers={"Ocp-Apim-Subscription-Key": subscription_key}
const response = await req.loadJSON();



const trips = response.trips





for (var index in trips) {
  console.log(trips[index].legs[0].origin.name)
 console.log(trips[index].legs[0].destination.name)
  console.log(trips[index].legs[0].origin.actualDateTime)
  console.log(trips[index].legs[0].origin.actualTrack)
}
