import { IForgeFunction } from "@tryforge/forgescript";

const Function: IForgeFunction = {
  name: 'functionName',
  params: ['Param1','Param2'],
  code: `
    $logger[Info;This is a custom Function]
  `
};

export default Function;