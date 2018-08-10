
# Live Bot
### About
Live bot is a bot that helps promote streamers in your discord. Live bot automatically sets the role of users who are streaming to "live", so that people can easily see who is live. The live role can than be made to be displayed more prominently in member lists to automatically prioritize streamers.

### Setting up your own instance
If you don't want to use the public instance of the bot, found [here](https://discordapp.com/oauth2/authorize?client_id=471157611874484225&scope=bot&permissions=268435456), you can instead host your own in the same way (or you can host it on an actual server instead).

Live Bot is hosted for free on [Glitch](https://glitch.com), in a similar system to [this](https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/other-guides/hosting-on-glitchcom.html) tutorial. Live Bot is not setup to use the self-pinging system mentioned in the server - so you will need to set up some service to do it externally (or you could add it to the bot yourself). The public instance of the bot uses [Uptime Robot](https://uptimerobot.com/).

You will also need to configure the client token in `.env`. You can get your own client token [from discords developer portal](https://discordapp.com/developers/applications/). Just add it after `TOKEN=` 
