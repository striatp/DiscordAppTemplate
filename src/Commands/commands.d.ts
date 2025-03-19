// Define the structure for a command
export interface Command {
    type?: string;
    name: string;
    aliases?: string[];
    code: string;
    unprefixed?: boolean;
  }
  
export type Commands = Command[];