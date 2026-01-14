import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminService } from '../services/api';
import { Product, Offer, Restaurant } from '../types/admin';

const AdminDashboard: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: products = [] } = useQuery(['products'], adminService.getProducts);
  const { data: offers = [] } = useQuery(['offers'], adminService.getOffers);
  const { data: restaurants = [] } = useQuery(['restaurants'], adminService.getRestaurants);

  const updateProductMutation = useMutation(
    ({ id, product }: { id: string; product: Partial<Product> }) => adminService.updateProduct(id, product),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    }
  );

  const updateOfferMutation = useMutation(
    ({ id, offer }: { id: string; offer: Partial<Offer> }) => adminService.updateOffer(id, offer),
    {
      onSuccess: () => queryClient.invalidateQueries(['offers']),
    }
  );

  const updateRestaurantMutation = useMutation(
    ({ id, restaurant }: { id: string; restaurant: Partial<Restaurant> }) => adminService.updateRestaurant(id, restaurant),
    {
      onSuccess: () => queryClient.invalidateQueries(['restaurants']),
    }
  );

  const [editing, setEditing] = useState<{ type: string; id: string } | null>(null);

  const handleEdit = (type: string, id: string) => {
    setEditing({ type, id });
  };

  const handleSave = (type: string, id: string, data: any) => {
    if (type === 'product') updateProductMutation.mutate({ id, product: data });
    else if (type === 'offer') updateOfferMutation.mutate({ id, offer: data });
    else if (type === 'restaurant') updateRestaurantMutation.mutate({ id, restaurant: data });
    setEditing(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              {editing?.type === 'product' && editing.id === product.id ? (
                <form onSubmit={(e) => { e.preventDefault(); handleSave('product', product.id, { name: e.currentTarget.name.value }); }}>
                  <input name="name" defaultValue={product.name} className="border p-1" />
                  <button type="submit" className="ml-2 bg-green-500 text-white p-1">Save</button>
                </form>
              ) : (
                <>
                  {product.name} <button onClick={() => handleEdit('product', product.id)} className="ml-2 bg-blue-500 text-white p-1">Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Offers</h2>
        <ul>
          {offers.map((offer) => (
            <li key={offer.offerId} className="mb-2 border p-2">
              {editing?.type === 'offer' && editing.id === offer.offerId ? (
                <form onSubmit={(e) => { e.preventDefault(); handleSave('offer', offer.offerId, { foodName: e.currentTarget.foodName.value, description: e.currentTarget.description.value }); }}>
                  <input name="foodName" defaultValue={offer.foodName} placeholder="Food Name" className="border p-1 mb-1 w-full" />
                  <textarea name="description" defaultValue={offer.description} placeholder="Description" className="border p-1 mb-1 w-full" />
                  <button type="submit" className="bg-green-500 text-white p-1">Save</button>
                </form>
              ) : (
                <>
                  <strong>{offer.foodName}</strong> - {offer.description} ({offer.merchantName}) <button onClick={() => handleEdit('offer', offer.offerId)} className="ml-2 bg-blue-500 text-white p-1">Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl mb-4">Restaurants</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.merchantId} className="mb-2 border p-2">
              {editing?.type === 'restaurant' && editing.id === restaurant.merchantId ? (
                <form onSubmit={(e) => { e.preventDefault(); handleSave('restaurant', restaurant.merchantId, { businessName: e.currentTarget.businessName.value, description: e.currentTarget.description.value }); }}>
                  <input name="businessName" defaultValue={restaurant.businessName} placeholder="Business Name" className="border p-1 mb-1 w-full" />
                  <textarea name="description" defaultValue={restaurant.description} placeholder="Description" className="border p-1 mb-1 w-full" />
                  <button type="submit" className="bg-green-500 text-white p-1">Save</button>
                </form>
              ) : (
                <>
                  <strong>{restaurant.businessName}</strong> - {restaurant.description} <button onClick={() => handleEdit('restaurant', restaurant.merchantId)} className="ml-2 bg-blue-500 text-white p-1">Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;