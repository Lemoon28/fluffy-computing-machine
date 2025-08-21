import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {isHomePage && (
        <>
          {/* Background wrapper for navbar and hero only */}
          <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3CradialGradient id=\'a\' cx=\'75%25\' cy=\'25%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%232487eb\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23001F3F\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23000B1A\'/%3E%3C/radialGradient%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'matrix\' values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'1200\' height=\'800\' fill=\'url(%23a)\'/%3E%3Crect width=\'1200\' height=\'800\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3Ccircle cx=\'200\' cy=\'600\' r=\'1\' fill=\'white\' opacity=\'0.6\'/%3E%3Ccircle cx=\'300\' cy=\'500\' r=\'0.5\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'400\' cy=\'650\' r=\'0.8\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'150\' cy=\'400\' r=\'0.6\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'500\' cy=\'300\' r=\'0.7\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'600\' cy=\'700\' r=\'0.5\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'250\' cy=\'350\' r=\'0.9\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'350\' cy=\'200\' r=\'0.6\' fill=\'white\' opacity=\'0.4\'/%3E%3C/svg%3E")' }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative">
              <Navbar />
              {/* Hero section content */}
              <section className="relative border-b border-gray-800/50">
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-32 flex flex-col sm:flex-col md:flex-row items-center gap-6 sm:gap-10">
                  {/* Left Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
                      Creative Digital Experiences
                    </h1>
                    
                    <p className="mt-3 text-gray-200 max-w-prose mx-auto md:mx-0 text-base sm:text-lg">
                      I craft user‑friendly and visually engaging digital solutions that combine aesthetic excellence with functional design principles for modern businesses.
                    </p>
                    
                    <div className="mt-6 flex gap-3 justify-center md:justify-start">
                      <a 
                        href="#work" 
                        className="bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-custom-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-custom-blue-500/25"
                      >
                        View Projects
                      </a>
                      
                      <Link 
                        href="/contact" 
                        className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 inline-block"
                      >
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Content - Profile Image */}
                  <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative mx-auto md:ml-auto md:mr-0 size-72 sm:size-88 md:size-[28rem] rounded-full overflow-hidden border border-black/5 shadow-inner">
                      <img src="/images/profile.jpg" alt="Portrait of Lem Tippong" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* Rest of the content outside background */}
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
        </>
      )}
      {!isHomePage && (
        <>
          <Navbar />
          <main className="flex-1"> 
            <Component {...pageProps} />
          </main>
        </>
      )}
      <Footer />
    </div>
  );
}
