// types.ts

// Define the structure of a single service
export interface Service {
  id: number;
  title: string;
  description: string;
}

// Define the structure for different categories of services
export interface Services {
  cybersecurity: Service[];
  software: Service[];
}
