// Application commands options
export type ApplicationOption = {
    type: number;
    name: string;
    description: string;
    required: boolean;
    max_value?: number;
    min_value?: number;
    max_length?: number;
    min_length?: number;
};

// Application commands data
export type ApplicationData = {
    type: number;
    name: string;
    description: string;
    options?: ApplicationOption[];
};

// Define the structure for a slash (app) command
export type Application = {
    data: ApplicationData;
    code: string;
};