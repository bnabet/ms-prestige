export interface Car {
  _id: number;
  brand: string;
  model: string;
  trimLevel: string;
  year: number;
  power: number;
  seats: number;
  fuelType: string;
  status: string;
  rentalPricePerDay: number;
  description: string;
  imagesUrls: string[];
  unlimitedMileage: boolean;
}
