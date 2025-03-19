"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command = {
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
exports.default = command;
//# sourceMappingURL=example.js.map