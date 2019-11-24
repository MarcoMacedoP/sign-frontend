export interface ProviderType {
    provider_id: string,
      name: string;
      lastname: string;
      about: string;
      email: string;
      phone: number;
      image_url: string;
      incomes: Array<any>;
      fullLoaded?: boolean;
}