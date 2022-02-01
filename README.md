# BUILD YOUR OWN SLACKBOT 


![slackimage](https://www.uctoday.com/wp-content/uploads/2017/04/slack-review-team-collaboration-software.jpg)


## SUMMARY 

We are going to build a bot using node, which we will run from our own machine. It will interface with two APIs, so that when the user asks for a joke we will return the joke from the API in the slack channel.


## RESOURCES

### SLACKBOT API

Link [here](https://github.com/mishk0/slack-bot-api) , you can install this easily from command line by running `npm install slackbots` . 

This lib is very easy and practical.


## FROM SCRATCH 

![workspace](images/ws.png)

Go to [here](https://slack.com) to sign up, then once you have entered your email, select `create a new workspace` 

You will then go into your slack workspace - which looks like a chat window. You have two workspaces, we want the bot to work in the general chanel. 

## CREATE THE BOT

Go to [https://api.slack.com/apps](https://api.slack.com/apps) and give the bot a name, and select your workspace name from the dropdown. 

From the `basic information` tab on the left hand side, we then select `bots` followed by `add bot user`

![online](images/online.png)

Keep the `always show bot as online` selected off. This means it will only come online once your server is running. 

Make change and select save changes. 

![features](images/features.png)

Notice features should now be ticked. 

Next step is to select `install app to your workspace` below the features button.  Select authorize and you will notice it is also now ticked. 
<br>

![features](images/info.png)
<br><br>

Scroll down on the main page, add an avatar including a description 

# START YOUR PROJECT

Open up terminal or in my case VSCODE and work on shell from there and run : 


`npm init`

Give it a description, author, etc.

Lets add our dependencies - we need slackbot as mentioned above and also axios so we can make api requests.

```
npm i slackbots axios
```

Lets ensure our app starts when we start the server by adding hte following snippet into `package.json` if you are unsure look at my example in the directory above. 

```
  "scripts": {
    "start": "node index.js"
  },
```


Let's create our `index.js` file and you can modify from my example in this repo. The only major thing you need to remember is to get the token, you need to go to `OAuth and Permissions` tab on the left hand side of your bot creation page as shown below, then select `Bot User OAuth Access Token`

![features](images/OAuth.png)

In my code I am reading the contents from a file called js.txt which i have not included in this repo. 


I have left the second API call for you to modify and fix yourself to pull back the joke required. 


When you are ready to test and run your app, just enter into command line: 

`npm start`


**Good luck!!**