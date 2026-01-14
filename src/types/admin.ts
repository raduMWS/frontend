export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Product {
  id: string;
  name: string;
  // Add more fields as needed
}

export interface Offer {
  offerId: string;
  merchantId: string;
  foodName: string;
  description?: string;
  category: string; // OfferCategory enum
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  quantityUnit: string; // QuantityUnit enum
  imageUrl?: string;
  pickupStartTime: string;
  pickupEndTime: string;
  allergens?: any;
  dietary: string; // DietaryType enum
  expirationDate?: string;
  isAvailable: boolean;
  createdAt: string;
  merchantName: string;
  merchantLogoUrl?: string;
  merchantRating?: number;
  distanceKm?: number;
}

export interface Restaurant {
  merchantId: string;
  userId: string;
  businessName: string;
  businessType: string; // BusinessType enum
  description?: string;
  logoUrl?: string;
  coverImageUrl?: string;
  latitude?: number;
  longitude?: number;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postalCode?: string;
  countryCode?: string;
  phoneNumber?: string;
  websiteUrl?: string;
  operatingHoursJson?: string;
  pickupInstructions?: string;
  averageRating: number;
  totalReviews: number;
  isVerified: boolean;
  stripeAccountId?: string;
  commissionRate: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}