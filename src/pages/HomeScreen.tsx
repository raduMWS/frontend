/*
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import OfferCard from '../components/OfferCard';
import { offerService } from '../services/api';
import { OfferDTO } from '../types/offer';

const HomeScreen: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  // Fetch offers
  const { data: offers, isLoading, error } = useQuery({
    queryKey: ['offers', userLocation],
    queryFn: () => offerService.getOffersFeed({
      lat: userLocation?.lat,
      lng: userLocation?.lng,
      radius: 10,
    }),
    enabled: !!userLocation,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading offers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading offers</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">FrugalBites</h1>
          <p className="text-gray-600">Fresh food, great savings</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!userLocation && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              Please enable location services to see offers near you.
            </p>
          </div>
        )}

        {offers && offers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <OfferCard
                key={offer.offerId}
                offer={offer}
                onClick={() => {
                  // TODO: Navigate to offer detail
                  console.log('Offer clicked:', offer.offerId);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No offers available right now.</p>
            <p className="text-gray-400">Check back later for fresh deals!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomeScreen;
*/