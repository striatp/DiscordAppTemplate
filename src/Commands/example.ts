import { Commands } from './commands';

const command: Commands = [
  {
    type: "messageCreate",
    name: "example",
    aliases: [],
    code: `$sendMessage[$channelID;Hello world!]`,
    unprefixed: false,
  },
];

export default command;