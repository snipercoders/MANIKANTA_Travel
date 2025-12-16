'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPinIcon, ArrowRightIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const vehicles = [
  { name: 'Sedan (Dzire/Etios)', seats: 4, perKm: 13, perKmWithTax: 15 },
  { name: 'Innova Crysta', seats: 7, perKm: 18, perKmWithTax: 21 },
  { name: 'Tempo Traveller (12 Seater)', seats: 12, perKm: 22, perKmWithTax: 26 },
  { name: 'Tempo Traveller (17 Seater)', seats: 17, perKm: 26, perKmWithTax: 30 },
  { name: 'Tempo Traveller (20 Seater)', seats: 20, perKm: 30, perKmWithTax: 35 },
  { name: 'Ertiga', seats: 6, perKm: 16, perKmWithTax: 19 },
  { name: 'Swift Dzire', seats: 4, perKm: 12, perKmWithTax: 14 },
  { name: 'Toyota Fortuner', seats: 7, perKm: 35, perKmWithTax: 42 },
  { name: 'Mahindra Xylo', seats: 7, perKm: 17, perKmWithTax: 20 },
  { name: 'Force Traveller', seats: 14, perKm: 24, perKmWithTax: 28 },
];

const ITEMS_PER_PAGE = 10;

export default function CarsPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [km, setKm] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [famousPlaces, setFamousPlaces] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  useEffect(() => {
    if (!from || !to || from.length < 3 || to.length < 3) {
      setDistance(null);
      setFamousPlaces([]);
      setSelectedPlace(null);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/distance?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}`);
        const data = await res.json();

        if (data.error) {
          setDistance(data.fallback_distance || 150);
          setFamousPlaces(data.fallback_places || ['Taj Mahal', 'Red Fort', 'Qutub Minar', 'India Gate']);
        } else {
          setDistance(data.distance);
          setFamousPlaces(data.famous_places || []);
        }

        if (!km && data.distance) setKm(data.distance.toString());
      } catch (err) {
        setDistance(150);
        setFamousPlaces(['Taj Mahal', 'Red Fort', 'Qutub Minar', 'India Gate']);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [from, to, km]);

  const finalKm = Number(km || distance || 0);

  const handlePlaceClick = (place: string) => {
    setSelectedPlace(place);
    const extraKm = 40;
    const newKm = (finalKm || distance || 0) + extraKm;
    setKm(newKm.toString());
  };

  // Pagination
  const totalPages = Math.ceil(vehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVehicles = vehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">
          Cars & Tempo Traveller Fleet
        </h1>

        {/* Full-Width AI Planner */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 mb-12 text-white transform hover:scale-[1.01] transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-4">
            <SparklesIcon className="h-12 w-12 animate-pulse" />
            Plan Your Trip with AI
            <SparklesIcon className="h-12 w-12 animate-pulse" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium">
                <MapPinIcon className="h-6 w-6 text-yellow-300" />
                Pickup Location
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. Jaipur, Delhi"
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-yellow-300 focus:outline-none text-lg transition-all"
              />
            </div>

            <div className="hidden md:flex justify-center items-center">
              <ArrowRightIcon className="h-16 w-16 text-yellow-300 animate-pulse" />
            </div>
            <div className="md:hidden text-center">
              <ArrowRightIcon className="h-12 w-12 text-yellow-300 mx-auto rotate-90 animate-pulse" />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium">
                <MapPinIcon className="h-6 w-6 text-green-300" />
                Destination
              </label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. Agra, Udaipur"
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-green-300 focus:outline-none text-lg transition-all"
              />
            </div>
          </div>

          {loading && (
            <div className="mt-8 text-center">
              <p className="text-xl animate-pulse">Loading...</p>
            </div>
          )}

          {distance && (
            <div className="mt-10 bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/40">
              <p className="text-2xl md:text-3xl font-bold">
                Trip: <span className="text-yellow-300">{from}</span> → <span className="text-green-300">{to}</span>
              </p>
              <p className="text-4xl md:text-5xl font-extrabold mt-4 text-yellow-300">
                {distance} KM
              </p>
            </div>
          )}

          {famousPlaces.length > 0 && (
            <div className="mt-10">
              <p className="text-2xl font-bold text-center mb-6">Famous Places Near {to}:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {famousPlaces.map((place) => (
                  <button
                    key={place}
                    onClick={() => handlePlaceClick(place)}
                    className={`px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-110 hover:shadow-2xl ${
                      selectedPlace === place
                        ? 'bg-green-400 text-white ring-8 ring-green-300'
                        : 'bg-white/30 backdrop-blur text-white hover:bg-white/50 border-2 border-white/50'
                    }`}
                  >
                    {place} (+40 KM)
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {currentVehicles.map((v) => {
            const totalExcl = v.perKm * finalKm;
            const totalIncl = v.perKmWithTax * finalKm;

            return (
              <div
                key={v.name}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group"
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/car-placeholder.jpg"
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-3xl font-bold">{v.seats}</p>
                    <p className="text-lg">Seater</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{v.name}</h3>

                  <div className="space-y-3 text-sm mb-5">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Excl. Tax</span>
                      <span className="font-semibold">₹{v.perKm}/km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Incl. Tax</span>
                      <span className="font-bold text-green-600 text-lg">₹{v.perKmWithTax}/km</span>
                    </div>
                  </div>

                  <input
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    placeholder={distance?.toString() || 'Enter KM'}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-400 focus:border-purple-600 transition text-center font-semibold"
                  />

                  {finalKm > 0 && (
                    <div className="mt-5 p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                      <div className="text-center space-y-2">
                        <p className="text-xs text-gray-600">Total (Excl. Tax)</p>
                        <p className="text-xl font-bold">₹{formatPrice(totalExcl)}</p>
                        <div className="border-t pt-2">
                          <p className="text-xs text-gray-600">Total (Incl. Tax)</p>
                          <p className="text-3xl font-extrabold text-green-600">₹{formatPrice(totalIncl)}</p>
                        </div>
                        {selectedPlace && (
                          <p className="text-sm text-purple-700 mt-3 font-medium">
                            + {selectedPlace}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mb-16">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
            >
              <ChevronLeftIcon className="h-8 w-8 text-purple-600" />
            </button>
            <span className="text-xl font-bold text-purple-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
            >
              <ChevronRightIcon className="h-8 w-8 text-purple-600" />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-800 text-white py-16 rounded-3xl shadow-2xl">
          <p className="text-5xl font-bold mb-4">Book Your Comfort Ride Now!</p>
          <p className="text-3xl">
            Call or WhatsApp:{' '}
            <span className="font-bold text-yellow-300 text-4xl">+91 98765 43210</span>
          </p>
          <p className="text-xl mt-4 opacity-90">24×7 Instant Booking</p>
        </div>
      </div>
    </div>
  );
}