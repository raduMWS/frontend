import axios from 'axios';
import { OfferDTO, OfferCategory, DietaryType } from '../types/offer';
import { Product, Offer, Restaurant } from '../types/admin';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5228/api',
});

export interface OffersFeedParams {
  lat?: number;
  lng?: number;
  radius?: number;
  category?: OfferCategory;
  dietary?: DietaryType;
  minDiscount?: number;
}

export const offerService = {
  async getOffersFeed(params: OffersFeedParams): Promise<OfferDTO[]> {
    const response = await api.get('/offers/feed', { params });
    return response.data;
  },

  async getOffer(offerId: string): Promise<OfferDTO> {
    const response = await api.get(`/offers/${offerId}`);
    return response.data;
  },
};

export const adminService = {
  async getProducts(): Promise<Product[]> {
    // Assuming endpoint exists; adjust as needed
    const response = await api.get('/admin/products');
    return response.data;
  },

  async updateProduct(id: string, product: Partial<Product>): Promise<void> {
    await api.put(`/admin/products/${id}`, product);
  },

  async getOffers(): Promise<Offer[]> {
    // Assuming admin endpoint for all offers
    const response = await api.get('/admin/offers');
    return response.data;
  },

  async updateOffer(id: string, offer: Partial<Offer>): Promise<void> {
    await api.put(`/admin/offers/${id}`, offer);
  },

  async getRestaurants(): Promise<Restaurant[]> {
    // Assuming admin endpoint for merchants
    const response = await api.get('/admin/merchants');
    return response.data;
  },

  async updateRestaurant(id: string, restaurant: Partial<Restaurant>): Promise<void> {
    await api.put(`/admin/merchants/${id}`, restaurant);
  },
};

export default api;