import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import heroImage from '@assets/stock_images/modern_technology_ab_12e17f85.jpg';

type HeroFeature = {
  title: string;
  description?: string;
  icon?: ReactNode;
  imageSrc?: string; // optional image for the slide
};

type HeroSectionProps = {
  videoSrc?: string; // Optional background video
  posterSrc?: string; // Optional video poster image
  features?: HeroFeature[]; // Optional right-side features list
};

export default function HeroSection({ videoSrc, posterSrc, features = [] }: HeroSectionProps) {
  // Auto-play support for the features carousel
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const timerRef = useRef<number | null>(null)

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const startTimer = () => {
    if (!carouselApi || timerRef.current) return
    timerRef.current = window.setInterval(() => {
      // Scroll to next slide; loop is enabled so it wraps
      carouselApi.scrollNext()
    }, 4000)
  }

  useEffect(() => {
    if (!carouselApi) return

    // Start autoplay when API is ready
    startTimer()

    // Pause on drag and resume after
    const onPointerDown = () => clearTimer()
    const onPointerUp = () => startTimer()
    const onReInit = () => {
      clearTimer()
      startTimer()
    }

    carouselApi.on('pointerDown', onPointerDown)
    carouselApi.on('pointerUp', onPointerUp)
    carouselApi.on('reInit', onReInit)

    return () => {
      carouselApi.off('pointerDown', onPointerDown)
      carouselApi.off('pointerUp', onPointerUp)
      carouselApi.off('reInit', onReInit)
      clearTimer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselApi])
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            className="absolute inset-0 w-full h-full object-cover saturate-0 brightness-60"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Background video"
          />
        ) : (
          <img
            src={heroImage}
            alt="Technology background"
            className="w-full h-full object-cover saturate-0 brightness-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-neutral-950/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
  <div className={features.length ? 'grid grid-cols-1 lg:grid-cols-12 gap-10' : ''}>
          {/* Left: Core content */}
          <div className={features.length ? 'lg:col-span-7' : ''}>
            <div className="max-w-3xl text-left">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
                data-testid="text-hero-title"
              >
                Transform Your Business with AI Solutions
              </h1>
              <p
                className="text-lg md:text-xl text-neutral-300 max-w-2xl"
                data-testid="text-hero-subtitle"
              >
                Intelligent automation and AI-powered solutions that deliver 85% cost reduction and 340% ROI.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="group bg-neutral-900 text-white hover:bg-black border border-white/10"
                  aria-label="Get Free Consultation"
                  data-testid="button-hero-primary"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-700 text-neutral-200 hover:bg-neutral-800/40"
                  aria-label="View Success Stories"
                  data-testid="button-hero-secondary"
                >
                  View Success Stories
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap gap-10 text-neutral-300">
                <div className="text-left" data-testid="stat-clients">
                  <div className="text-2xl md:text-3xl font-semibold">50+</div>
                  <div className="text-sm tracking-wide">Clients</div>
                </div>
                <div className="text-left" data-testid="stat-rating">
                  <div className="text-2xl md:text-3xl font-semibold">4.9/5</div>
                  <div className="text-sm tracking-wide">Rating</div>
                </div>
                <div className="text-left" data-testid="stat-accuracy">
                  <div className="text-2xl md:text-3xl font-semibold">99.7%</div>
                  <div className="text-sm tracking-wide">AI Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature cards (optional) */}
          {features.length > 0 && (
            <aside className="hidden lg:block lg:col-span-5">
              <div
                className="relative px-0 h-[28rem] md:h-[30rem]"
                onMouseEnter={clearTimer}
                onMouseLeave={startTimer}
              >
                <Carousel opts={{ loop: true }} setApi={setCarouselApi} className="relative h-full">
                  <CarouselContent className="h-full">
                  {features.map((f, idx) => (
                    <CarouselItem key={idx} className="h-full">
                      <Card className="h-full bg-neutral-900/60 border-white/10 text-white overflow-hidden flex flex-col">
                        {/* Image header */}
                        {f.imageSrc && (
                          <div className="h-48 md:h-56 lg:h-60 w-full overflow-hidden">
                            <img src={f.imageSrc} alt="" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <CardHeader className="flex-row gap-4 items-start p-5 md:p-6">
                          {f.icon && <div className="mt-1 text-white/80">{f.icon}</div>}
                          <div>
                            <CardTitle className="text-xl md:text-2xl text-white">{f.title}</CardTitle>
                            {f.description && (
                              <CardDescription className="text-neutral-300 mt-1 text-sm md:text-base">
                                {f.description}
                              </CardDescription>
                            )}
                          </div>
                        </CardHeader>
                        
                      </Card>
                      
                    </CarouselItem>
                  ))}
                  </CarouselContent>
                </Carousel>
                {/* Custom navigation buttons to avoid layout quirks */}
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => carouselApi?.scrollPrev()}
                  className="absolute left-[-12px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-neutral-900/70 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-neutral-800/80 shadow-md z-10 flex items-center justify-center"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => carouselApi?.scrollNext()}
                  className="absolute right-[-12px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-neutral-900/70 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-neutral-800/80 shadow-md z-10 flex items-center justify-center"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
