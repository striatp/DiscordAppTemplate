// exampleCommand.ts
import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'example',
    description: 'This slash command is an example.',
    options: [
      {
        type: 6,
        name: 'user',
        description: 'Example using options.',
        required: false
      }
    ]
  },
  code: `$sendMessage[$channelID;Hello, **$option[example]**!]`,
};

export default ApplicationCommand;