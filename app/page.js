'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

// useRouter -> next/navigation

export default function Home() {


  const router = useRouter();
  console.log(router)

  function handleNavigateClick() {
    router.prefetch('/products');
    // router.push({
    //   pathname: '/products',
    //   query: {
    //     id: 123,
    //     name: 'Product 1',
    //   },
    // });
    // router.replace('/products'); // Replace current route with new one
    // router.back(); // Go back to previous route
    // router.prefetch('/products'); // Prefetch a new route, but it won't actually navigate to it
    // router.events.on('routeChangeComplete', (url) => {
    //   console.log(`Switched to ${url}`);
    // }); // Listen to route change events
    // router.events.on('routeChangeError', (err, url) => {
    //   console.error(`Failed to navigate to ${url}`, err);
    // }); // Listen to route change errors
    // router.isReady().then(() => {
    //
  }



  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-center">Wel come to nextjs</h1>
      <Link href={'products'}>Navigate to Product Page</Link>
      <Link href={'/account'}>Navigate to Account Page</Link>
      <h2 className="font-bold mt-3 text-lg"> Alternative way of navigating using useRouter</h2>
      <button onClick={() => router.push('/products')}>Navigate to Product Page</button>
      {/* <button onClick={handleNavigateClick}>Navigationg to product page using use router</button> */}
    </main>
  );
}
