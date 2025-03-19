// import { config } from './config';
import { ForgeClient } from '@tryforge/forgescript';
import { ForgeDB } from '@tryforge/forge.db';
import { ForgeCanvas } from '@tryforge/forge.canvas';
import * as dotenv from 'dotenv';
import functions from './functions';

// Environment variables
dotenv.config();

// Define the client configuration
const client: ForgeClient = new ForgeClient({
    // intents
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent'
    ],
    // Events
    events: [
        'debug',
        'error',
        'interactionCreate',
        'messageCreate',
        'ready',
        'shardDisconnect',
        'shardReady',
        'shardError',
        'shardReconnecting',
        'shardResume'
    ],
    // Extensions
    extensions: [
        new ForgeDB(),
        new ForgeCanvas()
    ],
    // Prefix
    prefixes: [
        '.'
    ]
});

// Load custom functions (if you have any)
functions.forEach((func) => client.functions.add(func));

// Commands loader
client.commands.load('./dist/Commands');
client.applicationCommands.load('./dist/App');

// Client login
const token: string = process.env.DISCORD_TOKEN || '';
if (token) {
    client.login(token);
} else {
    console.error('Token is missing from environment variables.');
}