"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  Battery,
  Fuel,
  Car,
  Wrench,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Star,
  MapPin,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import Image from "next/image"; // ← ONLY THIS LINE ADDED

// Main App Component
export default function RapidRoadAssist() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <Navbar
        scrolled={scrolled}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileSidebar
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && (
        <ServicesPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "contact" && <ContactPage />}

      <FloatingButtons />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Navbar Component
function Navbar({
  scrolled,
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  scrolled: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-orange-500" : "bg-orange-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <img
              src="/logo.png"
              className="h-[70px] items-center flex"
              alt="Logo"
            />
            <span className="text-white font-bold text-xl">
              Rapid Road Assist
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-orange-500">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(
                    item.id === "how-it-works" || item.id === "gallery"
                      ? "home"
                      : item.id
                  );
                  if (item.id === "how-it-works" || item.id === "gallery") {
                    setTimeout(() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                className={`text-white hover:text-orange-500 transition-colors ${
                  currentPage === item.id ? "text-orange-500" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="tel:+971522442893"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

// Mobile Sidebar
function MobileSidebar({
  isOpen,
  setIsOpen,
  currentPage,
  setCurrentPage,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center mb-8">
            <Car className="h-6 w-6 text-orange-500 mr-2" />
            <span className="text-white font-bold">Rapid Road Assist</span>
          </div>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(
                    item.id === "how-it-works" || item.id === "gallery"
                      ? "home"
                      : item.id
                  );
                  setIsOpen(false);
                  if (item.id === "how-it-works" || item.id === "gallery") {
                    setTimeout(() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                className={`block w-full text-left text-white hover:text-orange-500 py-2 transition-colors ${
                  currentPage === item.id ? "text-orange-500" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="tel:+919876543210"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-center mt-6"
            >
              <Phone className="h-4 w-4 inline mr-2" />
              Call Now
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

// HERO SLIDER - FIXED: Images from /public now work perfectly
function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/car1.jpg",
      title: "24/7 Rapid Road Assist",
      subtitle: "We're There When You Need Us Most!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1600&auto=format&fit=crop",
      title: "Fast & Reliable Service",
      subtitle: "Professional Help Arrives in Minutes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&auto=format&fit=crop",
      title: "Lowest price Guaranteed",
      subtitle: "Affordable Roadside Assistance for All Vehicles",
    },
    {
      image: "/car1.jpg",
      title: "Complete Car Recovery",
      subtitle: "From Battery to Towing - We Handle It All",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* THIS IS THE ONLY FIX - LOCAL IMAGES NOW WORK */}
          {slide.image.startsWith("http") ? (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          )}

          <div className="absolute inset-0  bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <a
                href="tel:+971522442893"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                <Phone className="inline h-5 w-5 mr-2" />
                Call Now: +971-52-244-2893
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-orange-500 w-8"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// HomePage Component (unchanged)
function HomePage() {
  const services = [
    {
      icon: <Battery className="h-12 w-12" />,
      title: "On-site Battery Replacement",
      description:
        "Dead battery? We come to you with a new one and install it on the spot.",
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Mobile Tyre Fitting",
      description:
        "Flat tire? Our mobile service brings and fits new tyres wherever you are.",
    },
    {
      icon: <Fuel className="h-12 w-12" />,
      title: "Emergency Fuel Delivery",
      description:
        "Ran out of fuel? We deliver petrol or diesel to your location fast.",
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Vehicle Recovery & Towing",
      description:
        "Breakdown or accident? Professional towing and recovery service available 24/7.",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Basement Pullout Service",
      description:
        "Stuck in basement or multi-storey car park? We specialize in difficult recoveries.",
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Breakdown Recovery",
      description:
        "Complete breakdown assistance with experienced technicians.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Call Us",
      description: "Contact us immediately via phone or WhatsApp",
    },
    {
      step: "2",
      title: "Share Location",
      description: "Tell us where you are and what you need",
    },
    {
      step: "3",
      title: "We Arrive Fast",
      description: "Our team reaches you within minutes",
    },
    {
      step: "4",
      title: "Problem Solved",
      description: "Get back on the road safely and quickly",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Clock />,
      title: "24/7 Availability",
      description: "Round the clock service",
    },
    {
      icon: <TrendingUp />,
      title: "Fast Response",
      description: "Average 15-min arrival time",
    },
    {
      icon: <Users />,
      title: "Expert Team",
      description: "Trained & certified technicians",
    },
    {
      icon: <DollarSign />,
      title: "Affordable Rates",
      description: "Transparent pricing",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service! They arrived in 10 minutes and replaced my battery on the spot. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Professional and courteous team. Saved me from a stressful situation at midnight. Thank you!",
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Best roadside assistance in the city. Fair pricing and super quick response time.",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=w=800",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=800",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
  ];

  return (
    <div className="pt-20">
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Comprehensive roadside assistance solutions available 24/7 across
            the city
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <button className="text-orange-500 font-semibold hover:text-orange-600">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            How It Works
          </h2>
          <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
            Getting help is easy and fast with our streamlined process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Our Work
          </h2>
          <p className="text-center text-slate-600 mb-12">
            See our team in action helping customers across the city
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-slate-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stuck on the Road? Call Rapid Road Assist Now!
          </h2>
          <p className="text-white text-lg mb-8">
            Available 24/7 for all your roadside emergencies
          </p>
          <a
            href="tel:+971522442893"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            <Phone className="inline h-5 w-5 mr-2" />
            +971-52-244-2893
          </a>
        </div>
      </section>
    </div>
  );
}

// Services Page Component
function ServicesPage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  const services = [
    {
      icon: <Battery className="h-16 w-16" />,
      title: "On-site Battery Replacement",
      description:
        "Complete battery replacement service at your location. We carry all major brands and sizes.",
      features: [
        "Quick diagnosis",
        "Quality batteries",
        "Same-day service",
        "Warranty included",
      ],
      price: "From ₹3,500",
    },
    {
      icon: <Wrench className="h-16 w-16" />,
      title: "Mobile Tyre Fitting",
      description:
        "Professional tyre replacement service that comes to you. All tyre sizes available.",
      features: [
        "All brands available",
        "Wheel balancing",
        "Alignment check",
        "Puncture repair",
      ],
      price: "From ₹2,000",
    },
    {
      icon: <Fuel className="h-16 w-16" />,
      title: "Emergency Fuel Delivery",
      description:
        "Ran out of fuel? We deliver petrol or diesel directly to your location.",
      features: [
        "Fast delivery",
        "Safe handling",
        "Competitive rates",
        "Any location",
      ],
      price: "From ₹500",
    },
    {
      icon: <Car className="h-16 w-16" />,
      title: "Vehicle Recovery & Towing",
      description:
        "Professional towing service for all vehicle types with trained operators.",
      features: [
        "Flatbed towing",
        "Wheel lift towing",
        "Damage-free transport",
        "Insurance approved",
      ],
      price: "From ₹1,500",
    },
    {
      icon: <TrendingUp className="h-16 w-16" />,
      title: "Basement Pullout Service",
      description:
        "Specialized service for vehicles stuck in basements or multi-storey car parks.",
      features: [
        "Expert operators",
        "Special equipment",
        "Safe extraction",
        "No damage guarantee",
      ],
      price: "From ₹2,500",
    },
    {
      icon: <Wrench className="h-16 w-16" />,
      title: "Breakdown Recovery",
      description:
        "Complete breakdown assistance with diagnostic and minor repair capabilities.",
      features: [
        "On-site diagnosis",
        "Minor repairs",
        "Jump start",
        "Lockout service",
      ],
      price: "From ₹800",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive roadside assistance solutions available 24/7.
            Professional, fast, and reliable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-orange-500 mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h2>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  What's Included:
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-500">
                  {service.price}
                </span>
                <a
                  href="tel:+919876543210"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-500 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-white text-lg mb-6">
            Our team is ready to help you 24/7
          </p>
          <a
            href="tel:+971522442893"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all"
          >
            <Phone className="inline h-5 w-5 mr-2" />
            Call +971-52-244-2893
          </a>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">
            We're here to help 24/7. Reach out anytime!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-slate-600 mb-8">
              Need roadside assistance or have questions? Contact us through any
              of these channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                  <a
                    href="tel:+9715224422893"
                    className="text-slate-600 hover:text-orange-500"
                  >
                    +971-52-244-2893
                  </a>
                </div>
                
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <a
                    href="mailto:help@rapidroadassist.com"
                    className="text-slate-600 hover:text-orange-500"
                  >
                    help@rapidroadassist.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/971522442893"
                    className="text-slate-600 hover:text-orange-500"
                  >
                    +971-52-244-2893
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                  <p className="text-slate-600">
                    123 Service Road, City Center
                    <br />
                    Your City, State 110001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">
                Emergency Hotline
              </h3>
              <p className="text-slate-600 mb-4">
                For immediate roadside assistance:
              </p>
              <a
                href="tel:+971522442893"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                <Phone className="inline h-5 w-5 mr-2" />
                Call Emergency Line
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819984638318!2d103.85176931475392!3d1.2868951990634208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d593a26ad%3A0xc7e2a58631e1a1f8!2sSingapore!5e0!3m2!1sen!2s!4v1234567890123"
            className="w-full h-96 rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

// Floating Buttons Component
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <a
        href="https://wa.me/971522442893"
        target="_blank"
        rel="noopener noreferrer"
        className="  text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
        title="WhatsApp"
      >
        <img src="/WhatsApp.svg.webp"/>
      </a>
      <a
        href="tel:+971522442893"
        className="bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
        title="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

// Footer Component
function Footer({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Rapid Road Assist Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-lg"
              />
              <span className="font-bold text-xl text-white">
                Rapid Road Assist
              </span>
            </div>

            <p className="text-slate-300 mb-4 text-sm md:text-base">
              Your trusted 24/7 roadside assistance partner. Always ready to
              help when you need us most.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="text-slate-300 hover:text-orange-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  {/* Twitter */}{" "}
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-orange-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  {/* Facebook */}{" "}
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-orange-500 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  {/* Instagram */}{" "}
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("services")}
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Battery Replacement</li>
              <li>Mobile Tyre Fitting</li>
              <li>Fuel Delivery</li>
              <li>Vehicle Recovery</li>
              <li>Basement Pullout</li>
              <li>Breakdown Recovery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-orange-500 mt-1" />
                <a
                  href="tel:+971522442893"
                  className="text-slate-300 hover:text-orange-500"
                >
                  +971-52-244-2893
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-orange-500 mt-1" />
                <a
                  href="mailto:help@rapidroadassist.com"
                  className="text-slate-300 hover:text-orange-500"
                >
                  help@rapidroadassist.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-5 w-5 text-orange-500 mt-1" />
                <a
                  href="https://wa.me/971522442893"
                  className="text-slate-300 hover:text-orange-500"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-slate-300">
                  123 Service Road
                  <br />
                  City Center, State 110001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Rapid Road Assist. All rights reserved. | Providing 24/7
            roadside assistance services.
          </p>
        </div>
      </div>
    </footer>
  );
}
