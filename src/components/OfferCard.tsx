import React from 'react';
import { OfferDTO } from '../types/offer';

interface OfferCardProps {
  offer: OfferDTO;
  onClick?: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, onClick }) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  const formatDistance = (distance?: number) => distance ? `${distance.toFixed(1)} km` : '';

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        {offer.imageUrl ? (
          <img
            src={offer.imageUrl}
            alt={offer.foodName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          -{offer.discountPercentage}%
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Merchant Info */}
        <div className="flex items-center mb-2">
          {offer.merchantLogoUrl && (
            <img
              src={offer.merchantLogoUrl}
              alt={offer.merchantName}
              className="w-6 h-6 rounded-full mr-2"
            />
          )}
          <span className="text-sm text-gray-600">{offer.merchantName}</span>
          {offer.merchantRating && (
            <span className="ml-auto text-sm text-yellow-500">
              ⭐ {offer.merchantRating.toFixed(1)}
            </span>
          )}
        </div>

        {/* Food Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{offer.foodName}</h3>

        {/* Price */}
        <div className="flex items-center mb-2">
          <span className="text-xl font-bold text-green-600 mr-2">
            {formatPrice(offer.discountedPrice)}
          </span>
          <span className="text-sm text-gray-500 line-through">
            {formatPrice(offer.originalPrice)}
          </span>
        </div>

        {/* Quantity */}
        <p className="text-sm text-gray-600 mb-2">
          {offer.quantity} {offer.quantityUnit.toLowerCase()}
        </p>

        {/* Pickup Time & Distance */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>
            Pickup: {new Date(offer.pickupEndTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
          {offer.distanceKm && (
            <span>{formatDistance(offer.distanceKm)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;