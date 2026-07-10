// components/layout/Header.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [desktopTransportOpen, setDesktopTransportOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Transportation',
      href: '/transportation',
      submenu: [
        { name: 'Cars & Tempo Traveller', href: '/transportation/cars' },
        { name: 'Buses & Mini Buses', href: '/transportation/buses' },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDesktopMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setDesktopTransportOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    if (closeTimer) clearTimeout(closeTimer);
    const timer = setTimeout(() => {
      setDesktopTransportOpen(false);
    }, 2000);
    setCloseTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timer = setTimeout(() => {
      setDesktopTransportOpen(false);
    }, 2000);
    setCloseTimer(timer);
  };

  const handleDesktopTransportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/transportation');
    setDesktopTransportOpen(false);
    if (closeTimer) clearTimeout(closeTimer);
  };

  const handleMobileTransportClick = () => {
    setTransportOpen(!transportOpen);
  };

  useEffect(() => {
    return () => {
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [closeTimer]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopTransportOpen(false);
        if (closeTimer) clearTimeout(closeTimer);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeTimer]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 sm:h-24 md:h-28 items-center justify-between py-3 sm:py-4">
          {/* Logo + Name - Black & White */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all duration-300">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md ring-2 ring-black/10 flex-shrink-0 bg-white">
                <img
                  src="/images/logo_mani.jpeg"
                  alt="Sri Manikanta Tour and Travels Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight">
                  MANIKANTA
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium -mt-0.5 sm:-mt-1 tracking-wider">
                  TOUR AND TRAVELS
                </p>
                <p className="text-[8px] sm:text-[10px] text-gray-400 -mt-0.5">Since 2006</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Black & White */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleDesktopMouseEnter}
                    onMouseLeave={handleDesktopMouseLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={handleDesktopTransportClick}
                      className={`flex items-center gap-1 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                        pathname.startsWith(item.href)
                          ? 'text-white bg-black'
                          : 'text-black/80 hover:text-black hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${desktopTransportOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Dropdown - Black & White */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 sm:w-60 rounded-xl shadow-2xl bg-white border border-gray-200 transition-all duration-300 z-50 ${
                        desktopTransportOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="py-2 sm:py-3">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setDesktopTransportOpen(false);
                              if (closeTimer) clearTimeout(closeTimer);
                            }}
                            className={`block px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition ${
                              pathname === sub.href
                                ? 'text-black bg-gray-100'
                                : 'text-gray-600 hover:text-black hover:bg-gray-50'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    pathname === item.href
                      ? 'text-white bg-black'
                      : 'text-black/80 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Quick Contact - Black & White */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919591762419"
              className="flex items-center gap-2 text-black hover:text-gray-600 transition text-sm font-medium"
            >
              <Phone className="h-4 w-4 text-black" />
              <span>+91 95917 62419</span>
            </a>
          </div>

          {/* Mobile Menu Button - Black & White */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-3 rounded-lg text-black hover:bg-gray-100 transition"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Black & White */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={handleMobileTransportClick}
                        className={`w-full flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition ${
                          pathname.startsWith(item.href)
                            ? 'text-white bg-black'
                            : 'text-black/80 hover:text-black hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${transportOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {transportOpen && (
                        <div className="pl-4 sm:pl-6 space-y-1 sm:space-y-1.5 mt-1.5 sm:mt-2">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setTransportOpen(false);
                              }}
                              className={`block py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-lg transition ${
                                pathname === sub.href
                                  ? 'text-black bg-gray-100'
                                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition ${
                        pathname === item.href
                          ? 'text-white bg-black'
                          : 'text-black/80 hover:text-black hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <a
                  href="tel:+919591762419"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-black/80 hover:text-black"
                >
                  <Phone className="h-4 w-4 text-black" />
                  <span>+91 95917 62419</span>
                </a>
                <p className="px-3 text-xs text-gray-400">
                  <MapPin className="h-3 w-3 inline text-black" /> Bangalore, Karnataka
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}