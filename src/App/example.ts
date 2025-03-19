// exampleCommand.ts
import { Application } from './applications';

const command: Application = {
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

export default command;