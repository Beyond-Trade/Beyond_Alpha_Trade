

interface AlertTypes {
  title: string;
  message: string;
  type: any;
}

export const getPairPrice = (fromRate:number, toRate:number) => {
  if(fromRate===0) return 0
  let result = (1/fromRate)*toRate;
  return result;
}