// Define the structure for a custom function
export interface CustomFunction {
    name: string;
    params: string[];
    code: string;
  }
  
  // Declare a type for an array of custom functions
  export type CustomFunctions = CustomFunction[];