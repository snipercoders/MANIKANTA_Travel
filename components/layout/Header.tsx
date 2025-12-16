
// // File Path: components/layout/Header.tsx
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [transportOpen, setTransportOpen] = useState(false);
//   const pathname = usePathname();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     {
//       name: 'Transportation',
//       href: '/transportation',
//       submenu: [
//         { name: 'Tempo Traveller & Cars', href: '/transportation/cars' },
//         { name: 'Buses & Mini Buses', href: '/transportation/buses' },
//       ],
//     },
//     { name: 'Gallery', href: '/gallery' },
//     { name: 'Review', href: '/reviews' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-soft">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
//         <div className="flex h-20 items-center justify-between py-3">

//           {/* Logo + Name - Updated with improved styling */}
//           <div className="flex items-center gap-3">
//             <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300">
//               <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-primary/20 dark:ring-primary/30 flex-shrink-0">
//                 <Image
//                   src="/images/logo_mani.jpeg"
//                   alt="Manikanta Tour and Travels Logo"
//                   fill
//                   sizes="56px"
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               <div>
//                 <h1 className="text-xl md:text-2xl font-bold text-primary dark:text-blue-400 leading-tight">
//                   MANIKANTA
//                 </h1>
//                 <p className="text-xs md:text-sm text-primary/80 dark:text-blue-300 font-medium -mt-1">
//                   TOUR AND TRAVELS
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation - Updated with theme colors */}
//           <div className="hidden md:flex md:items-center md:space-x-1">
//             {navigation.map((item) => {
//               if (item.submenu) {
//                 return (
//                   <div key={item.name} className="relative group">
//                     <button
//                       className={`flex items-center gap-1 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
//                         pathname.startsWith(item.href)
//                           ? 'text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-900/30'
//                           : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-blue-900/20 hover:text-primary dark:hover:text-blue-400'
//                       }`}
//                     >
//                       {item.name}
//                       <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
//                     </button>

//                     {/* Dropdown - Updated with theme colors */}
//                     <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-60 rounded-xl shadow-hard bg-white dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                       <div className="py-3">
//                         {item.submenu.map((sub) => (
//                           <Link
//                             key={sub.name}
//                             href={sub.href}
//                             className={`block px-6 py-3 text-sm font-medium transition ${
//                               pathname === sub.href
//                                 ? 'text-primary dark:text-blue-400 bg-primary/5 dark:bg-blue-900/30'
//                                 : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-blue-900/20 hover:text-primary dark:hover:text-blue-400'
//                             }`}
//                           >
//                             {sub.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
//                     pathname === item.href
//                       ? 'text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-900/30'
//                       : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-blue-900/20 hover:text-primary dark:hover:text-blue-400'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button - Updated */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-blue-900/20 transition"
//             >
//               {mobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - Updated with theme colors */}
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
//             <div className="px-4 py-4 space-y-2">
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   {item.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setTransportOpen(!transportOpen)}
//                         className={`w-full flex justify-between items-center px-4 py-3 text-base font-semibold rounded-lg transition ${
//                           pathname.startsWith(item.href)
//                             ? 'text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-900/30'
//                             : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-blue-900/20 hover:text-primary dark:hover:text-blue-400'
//                         }`}
//                       >
//                         {item.name}
//                         <ChevronDownIcon className={`h-5 w-5 transition-transform ${transportOpen ? 'rotate-180' : ''}`} />
//                       </button>
//                       {transportOpen && (
//                         <div className="pl-6 space-y-1 mt-2">
//                           {item.submenu.map((sub) => (
//                             <Link
//                               key={sub.name}
//                               href={sub.href}
//                               onClick={() => setMobileMenuOpen(false)}
//                               className={`block py-3 text-sm font-medium transition ${
//                                 pathname === sub.href
//                                   ? 'text-primary dark:text-blue-400 bg-primary/5 dark:bg-blue-900/30'
//                                   : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400'
//                               }`}
//                             >
//                               {sub.name}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className={`block px-4 py-3 text-base font-semibold rounded-lg transition ${
//                         pathname === item.href
//                           ? 'text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-900/30'
//                           : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-blue-900/20 hover:text-primary dark:hover:text-blue-400'
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }















'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [desktopTransportOpen, setDesktopTransportOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  const handleDesktopTransportClick = (e) => {
    e.preventDefault();
    router.push('/transportation');
    setDesktopTransportOpen(false);
  };

  const handleMobileTransportClick = () => {
    setTransportOpen(!transportOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-soft">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between py-3">

          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-blue-500/20 dark:ring-blue-400/30 flex-shrink-0 bg-blue-100">
                <img
                  src="/images/logo_mani.jpeg"
                  alt="Manikanta Tour and Travels Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 leading-tight">
                  MANIKANTA
                </h1>
                <p className="text-xs md:text-sm text-blue-600/80 dark:text-blue-300 font-medium -mt-1">
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
                    onMouseEnter={() => setDesktopTransportOpen(true)}
                    onMouseLeave={() => setDesktopTransportOpen(false)}
                  >
                    <a
                      href={item.href}
                      onClick={handleDesktopTransportClick}
                      onMouseEnter={() => setDesktopTransportOpen(true)}
                      className={`flex items-center gap-1 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                        pathname.startsWith(item.href)
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-900/30'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-blue-600/5 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                      <svg 
                        className={`h-4 w-4 transition-transform ${desktopTransportOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Dropdown */}
                    <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-60 rounded-xl shadow-2xl bg-white dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 z-50 ${
                      desktopTransportOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                      <div className="py-3">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setDesktopTransportOpen(false)}
                            className={`block px-6 py-3 text-sm font-medium transition ${
                              pathname === sub.href
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-600/5 dark:bg-blue-900/30'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-600/5 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
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
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-600/5 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
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
              className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600/5 dark:hover:bg-blue-900/20 transition"
            >
              {mobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
            <div className="px-4 py-4 space-y-2">
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
                        className={`w-full flex justify-between items-center px-4 py-3 text-base font-semibold rounded-lg transition ${
                          pathname.startsWith(item.href)
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-900/30'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-blue-600/5 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        {item.name}
                        <svg 
                          className={`h-5 w-5 transition-transform ${transportOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      {transportOpen && (
                        <div className="pl-6 space-y-1 mt-2">
                          {item.submenu.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setTransportOpen(false);
                              }}
                              className={`block py-3 px-4 text-sm font-medium rounded-lg transition ${
                                pathname === sub.href
                                  ? 'text-blue-600 dark:text-blue-400 bg-blue-600/5 dark:bg-blue-900/30'
                                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-600/5'
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
                      className={`block px-4 py-3 text-base font-semibold rounded-lg transition ${
                        pathname === item.href
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-900/30'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-blue-600/5 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
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