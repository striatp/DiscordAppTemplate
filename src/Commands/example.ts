import { CommandType, IBaseCommand } from '@tryforge/forgescript';

const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  name: "example",
  aliases: [],
  code: `$sendMessage[$channelID;Hello world!]`,
  unprefixed: false,
};

export default Command;