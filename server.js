require('dotenv').config();

const tmi = require('tmi.js');

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const user1 = "https://www.twitch.tv/claudinha98"
const user2 = "https://www.twitch.tv/seuvagem_pt"
const user3 = "https://www.twitch.tv/fabiodiasgamer"
const user4 = "https://www.twitch.tv/xxstriker10"
const user5 = "https://www.twitch.tv/ccasegaspt"
const user6 = "https://www.twitch.tv/dj_manuel_12"
const user7 = "https://www.twitch.tv/zeca_virtus"
const user8 = "https://www.twitch.tv/fandrade10"
const user9 = "https://www.twitch.tv/hitmanunited"
const user10 = "https://www.twitch.tv/pirexx_7"
const user11 = "https://www.twitch.tv/anao_do_mall"
const user12 = "https://www.twitch.tv/goz_fer_sk"
const user13 = "https://www.twitch.tv/diabelika69"
const user14 = "https://www.twitch.tv/iukasofficial"
const user15 = "https://www.twitch.tv/Bolinhaboypt"
const user16 = "https://www.twitch.tv/ImDarkPT81"
const user17 = "https://www.twitch.tv/RochaRasrochaGaming"
const user18 = "https://www.twitch.tv/dragaoilhapt"
const user19 = "https://www.twitch.tv/PiippoGamePlay"
const user20 = "https://www.twitch.tv/Thuglive69"
const user21 = "https://www.twitch.tv/wieira7"
const user23 = "https://www.twitch.tv/Fabiokillmen"
const user24 = "https://www.twitch.tv/EstevesJr23"
const user25 = "https://www.twitch.tv/ibrancoi99"







const commands = {
  youtube: {
    response: 'https://www.youtube.com/channel/UCGFqxHUCeLnD8pwaX3F-HOQ'
  },
  upvote: {
    response: (user) => `User ${user} was just upvoted`
  },
  teste: {
    response: (user) => `So para testar ${user} ;)`
  },
  panda: {
    response: `🇵🇹
    ${user1}
    ${user2}
    ${user3}
    ${user4}
    ${user5}
    ${user5}
    ${user6}
    ${user7}
    ${user8}
    ${user9}
    ${user10}
    ${user11}
    ${user12}
    ${user13}
    ${user14}`
  }
}

const client = new tmi.Client({


	channels: [ 'jogadordeal' ],
  identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	const isNotBot = tags.username.toLocaleLowerCase() !== process.env.TWITCH_BOT_USERNAME;

  if ( !isNotBot ) return;

  const [raw, command, argument] = message.match(regexpCommand);

  const {response} = commands[command] || {};

  if (typeof response === 'function' ) {
    client.say(channel, response(tags.username))
  } else if (typeof response === 'string') {
    client.say(channel, response)
  }


  // {
  //   client.say(channel, `Message "${message}" was sent by ${tags.username}`)
  // }

	console.log(`${tags['display-name']}: ${message}`);
});
