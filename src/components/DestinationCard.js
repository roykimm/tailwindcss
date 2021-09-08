import React from 'react'

const sizeClasses = {
    height: "h-32",
    width: "w-32",
  };

const DestinationCard = ({destination}) => {
    return (
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img src={destination.imageUrl} alt={destination.imageAlt} className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`} />
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>

                <p className="text-gray-600">${destination.averagePrice} / night average</p>
                <div className="mt-4">
                    <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                        Explore {destination.propertyCount} properties
                    </a>
                </div>
            </div>
        </div>      
    )
}

export default DestinationCard
