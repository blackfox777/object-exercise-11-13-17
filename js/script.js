var gamingLaptop = {
  processor: 'I7',
  ram: '12gb',
  graphicscard: 'gtx670m',
  storage: '1tb',
  preferrials: ["Mouse, Keyboard", "Printer", "Charger"],
  goodPerformance: true,
  monitor: {
    screenSize: '15.6inches',
    resolution: "1920x1080",
    hd: true,
    adapter: "HDMI"
  },
  gamesItCanPlay: function(game) {
    console.log("It " + "can " + "play " + game);
  }
};


var hoverScooter = {
  speed: '20mph',
  dashboard: 'lcd screen',
  batterylife: '5hrs',
  foldableDesign: true,
  charge: ['250watts', '6.5hrs', '10.5ah'],
  acessories: ['Lock', 'key', 'bikestand', 'cleaning cloth' ],
 runMph: function(miles) {
   console.log("I " + "ride " + miles + " miles");
 }
}

hoverScooter.runMph(7);
