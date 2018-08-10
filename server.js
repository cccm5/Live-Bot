// init project
var express = require('express');
var app = express();

// Load the static landing page with express
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


//Create the discord client
const Discord = require("discord.js");
const client = new Discord.Client();

//login to the client using our token stored in .env
client.login(process.env.TOKEN);


// This event will run if the bot starts, and logs in, successfully.
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

// This event triggers when the bot joins a guild.
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

// this event triggers when the bot is removed from a guild.
client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

// this event triggers when a users pressence is changed
client.on("presenceUpdate", (oldMember, newMember) => {
  let oldStreamingStatus = oldMember.presence.game ? oldMember.presence.game.streaming : false;
  let newStreamingStatus = newMember.presence.game ? newMember.presence.game.streaming : false;
  // if the user isn't changing from/to streaming, return
  if(oldStreamingStatus == newStreamingStatus){
    return;
  }
  //get the live role, otherwise return
  let liveRole = oldMember.guild.roles.find("name", "Live");
  if(liveRole == null)
    return;
  //toggle the live role on or of depending on the status of the client
  if(newStreamingStatus){
    newMember.addRole(liveRole).catch(console.error);
    return;
  }
  newMember.removeRole(liveRole).catch(console.error);
});