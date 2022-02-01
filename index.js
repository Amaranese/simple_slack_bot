const SlackBot = require('slackbots');
const axios =  require('axios');

let fs = require('fs')
let filename = "js.txt"
let content = fs.readFileSync(process.cwd() + "/" + filename).toString()


const bot = new SlackBot({
    token: content,
    name: 'butler_bot'

})


// startup process 
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':poop:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    console.log('starting service')
    bot.postMessageToChannel('general', 'howdy gang!', params);
    
});




// Error handler 
bot.on('error', (err) => console.log(err));




// Check input type
bot.on('message', (data) => {
    // data object has some properties on them type
    if(data.type !== 'message') {
        return;
    }

// If input from user is a message - pass text to handlerMessage
   handleMessage(data.text); 
});


// Message handler
function handleMessage(message){
    if(message.includes('give me a chuck joke')){
        chuckjoke(); // if text contains chuck norris, lets run our function chuckjoke
    } else if(message.includes('give me a joke')){
        hazjoke();
    } else if(message.includes('give me a random joke')){
        randomjoke();
    } else if(message.includes(' help')){
        runhelp(); 
    }
}



// tell a chuck norris joke 
// use an external api url 
// returns a type,value object we need to dig into 
function chuckjoke(){
    axios.get('http://api.icndb.com/jokes/random')
        .then(res =>{
            const joke = res.data.value.joke;
            var params = {
                icon_emoji: ':laughing:'
            };  
            bot.postMessageToChannel('general', `Chuck Norris Joke: ${joke}`, params);
        })
}

function hazjoke(){
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(res =>{
            // no value object this time 
            const setup = res.data.setup;
            const pun = res.data.punchline;

            var params = {
                icon_emoji: ':laughing:'
            };  
            bot.postMessageToChannel('general', `Here you go: ${setup} \n  ${pun}`, params);
        })
}


// tell a random joke

function randomjoke(){
    const rand = Math.floor(Math.random() * 2) + 1;
    if(rand ===1){
        chuckjoke();
    }else if(rand ===2){
        hazjoke();
    }
}

// show help text

function runhelp(){
    var params = {
        icon_emoji: ':question:'
    };  
    bot.postMessageToChannel('general', ` Type '@butler_bot give me a ' followed by one of the following choices \n  'chuck joke' \n  'joke' \n  'random joke' `, params);

}