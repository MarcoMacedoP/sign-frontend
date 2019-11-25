export interface ProviderType {
    provider_id: string,
      name: string;
      lastname: string;
      about: string;
      email: string;
      phone: number;
      image_url: string;
      expenses: Array<any>;
      fullLoaded?: boolean;
}

export type IncomeType = 'service' | 'product';

export interface IncomeInterface {
   providerId: number | string;
    name: string; 
    description: string, 
    cost:number, 
    costPerHour:boolean
    type: IncomeType
}