// // File Path: components/layout/Header.tsx


'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [desktopTransportOpen, setDesktopTransportOpen] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
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
        { name: 'Tempo Traveller & Cars', href: '/transportation/cars' },
        { name: 'Buses & Mini Buses', href: '/transportation/buses' },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Review', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Open dropdown immediately on hover
  const handleDesktopMouseEnter = () => {
    // Clear any existing timers
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    
    // Open dropdown immediately
    setDesktopTransportOpen(true);
  };

  // Start 2-second timer to close dropdown when mouse leaves
  const handleDesktopMouseLeave = () => {
    // Clear any existing timers
    if (closeTimer) clearTimeout(closeTimer);
    
    // Set timer to close after 2 seconds
    const timer = setTimeout(() => {
      setDesktopTransportOpen(false);
    }, 2000);
    
    setCloseTimer(timer);
  };

  // Cancel close timer when hovering over dropdown
  const handleDropdownMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
  };

  // Start close timer when leaving dropdown
  const handleDropdownMouseLeave = () => {
    // Set timer to close after 2 seconds
    const timer = setTimeout(() => {
      setDesktopTransportOpen(false);
    }, 2000);
    
    setCloseTimer(timer);
  };

  const handleDesktopTransportClick = (e: any) => {
    e.preventDefault();
    router.push('/transportation');
    setDesktopTransportOpen(false);
    // Clear any timers
    if (closeTimer) clearTimeout(closeTimer);
    if (hoverTimer) clearTimeout(hoverTimer);
  };

  const handleMobileTransportClick = () => {
    setTransportOpen(!transportOpen);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [hoverTimer, closeTimer]);

  // Close mobile menu when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopTransportOpen(false);
        if (closeTimer) clearTimeout(closeTimer);
        if (hoverTimer) clearTimeout(hoverTimer);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, closeTimer, hoverTimer]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 backdrop-blur-sm border-b border-red-700 shadow-lg">
      <nav className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between py-2 sm:py-3">

          {/* Logo + Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-all duration-300">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-md ring-1 sm:ring-2 ring-red-500/30 flex-shrink-0 bg-white">
                <img
                  src="/images/logo_mani.jpeg"
                  alt="Manikanta Tour and Travels Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                  MANIKANTA
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium -mt-0.5 sm:-mt-1">
                  TOUR AND TRAVELS
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
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
                    <a
                      href={item.href}
                      onClick={handleDesktopTransportClick}
                      className={`flex items-center gap-1 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                        pathname.startsWith(item.href)
                          ? 'text-white bg-red-700/30'
                          : 'text-white/90 hover:text-white hover:bg-black/20'
                      }`}
                    >
                      {item.name}
                      <svg 
                        className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${desktopTransportOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Dropdown - Shows immediately, stays for 2 seconds after mouse leaves */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 sm:w-60 rounded-xl shadow-2xl bg-white ring-1 ring-gray-200 transition-all duration-300 z-50 ${
                        desktopTransportOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="py-2 sm:py-3">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setDesktopTransportOpen(false);
                              if (closeTimer) clearTimeout(closeTimer);
                              if (hoverTimer) clearTimeout(hoverTimer);
                            }}
                            className={`block px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition ${
                              pathname === sub.href
                                ? 'text-red-600 bg-red-50'
                                : 'text-gray-700 hover:text-black hover:bg-gray-50'
                            }`}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    pathname === item.href
                      ? 'text-white bg-red-700/30'
                      : 'text-white/90 hover:text-white hover:bg-black/20'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-3 rounded-lg text-white hover:bg-black/20 transition"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-red-700 bg-red-900">
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMobileTransportClick();
                        }}
                        className={`w-full flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition ${
                          pathname.startsWith(item.href)
                            ? 'text-white bg-red-700/30'
                            : 'text-white/90 hover:text-white hover:bg-black/20'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${transportOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      {transportOpen && (
                        <div className="pl-4 sm:pl-6 space-y-1 sm:space-y-1.5 mt-1.5 sm:mt-2">
                          {item.submenu.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setTransportOpen(false);
                              }}
                              className={`block py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-lg transition ${
                                pathname === sub.href
                                  ? 'text-white bg-red-700/20'
                                  : 'text-white/80 hover:text-white hover:bg-black/20'
                              }`}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition ${
                        pathname === item.href
                          ? 'text-white bg-red-700/30'
                          : 'text-white/90 hover:text-white hover:bg-black/20'
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
