const Discord = require("discord.js")
const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.listen(port, function() {
  console.log("Listening")
})

app.get("/", function(req, res) {
  res.send("Sennin")
})

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on("ready", function() {
  console.log("Ready")
})

client.on("messageCreate", function(message) {
  if(message.content.toLowerCase().includes("dead") && message.content.toLowerCase().includes("chat")) {
    message.channel.send("Hey hey hey")
  }
  if(message.author.id == "692491669265973339" && message.content.toLowerCase().includes("hi")) {
    message.channel.send("stfu")
  }
  if(message.author.id == "692491669265973339" && message.content.toLowerCase().includes ("deez")) {
    message. channel.send("Your nuts have gonorrhea")
  }
  if(message.author.id == "281414608017817600" && message.content.toLowerCase().includes ("ayo")) {
    message.channel.send("ayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayoayo")
  }
  if(message.author.id == "500869315701243905" && message.content.toLowerCase().includes("purple") && message.content.toLowerCase().includes("hippo")) {
    message.channel.send("Do you have some history with the purple hippo, eggy? :hmmmm:")
  }
})

client.login(process.env.TOKEN)