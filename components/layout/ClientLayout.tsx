// // File Path: app/components/layout/ClientLayout.tsx
// 'use client';

// import { useLoading } from '@/contexts/LoadingContext';
// import PageLoader from '@/components/ui/PageLoader';

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   const { isLoading } = useLoading();

//   return (
//     <>
//       <PageLoader isLoading={isLoading} />
//       {children}
//     </>
//   );
// }