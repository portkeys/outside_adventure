import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mountain, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ChevronDown, 
  Menu, 
  X,
  Play,
  Compass,
  ChevronLeft,
  ChevronRight,
  Crown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showItinerary, setShowItinerary] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "National Parks Trips",
      location: "US",
      difficulty: "Easy",
      image: "https://cdn.nationalparktrips.com/wp-content/uploads/2022/11/YS-Lone-Bison-Grand-Prismatic_TamDougPalmer_2400.jpg?crop=535:301&width=1070&enable=upscale",
      description: "Explore US National Parks with Backpacker Magazine and Wildland Trekking guides. Support Public Lands."
    },
    {
      title: "Everest Base Camp",
      location: "Nepal Himalayas",
      difficulty: "Advanced",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Trek to the base of the world's highest peak with Outside editors and local guides."
    },
    {
      title: "Ski Swiss Alps",
      location: "Switzerland",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Epic ski trip with Ski Magazine through pristine Alpine terrain and world-class resorts."
    }
  ];

  const legends = [
    {
      title: "Climb Yosemite w/ Alex Honnold",
      name: "Alex Honnold",
      specialty: "Free Solo Legend",
      image: "https://cdn.prod.website-files.com/66da2cb2473171b62231b19e/67eae426f7013164d78f1eb1_Alex%20Honnold.avif",
      description: "Scale Yosemite's iconic granite walls with the world's most famous free solo climber."
    },
    {
      title: "Chase Waves w/ Mark Mathews",
      name: "Mark Mathews",
      specialty: "Big Wave Surfer",
      image: "https://static1.squarespace.com/static/63d8b0a2b8aec619c73cdff7/t/6423d28f68d89f78d44becd8/1680069267186/MarkMathews_Surfing.jpg?format=1500w",
      description: "Ride massive waves with one of the world's most fearless big wave surfers."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Everest Base Camp Participant",
      rating: 5,
      text: "The Everest Base Camp trek with Outside was life-changing. Our guide's expertise and the group's camaraderie made every challenging moment worth it. The documentary crew captured moments I'll treasure forever.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Marcus Rodriguez",
      location: "Climbed with Alex Honnold",
      rating: 5,
      text: "Learning from Alex Honnold in Yosemite was incredible. His mindset and technique insights transformed my approach to climbing. The Gaia GPS routes made navigation seamless.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emma Thompson",
      location: "Weekend Workshop Graduate",
      rating: 5,
      text: "The weekend navigation workshop in Denver was perfect for beginners. I learned Trailforks inside and out, made amazing friends, and now feel confident planning my own adventures.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" 
           style={{ 
             backgroundColor: scrollY > 100 ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
             backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none'
           }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Mountain className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold text-yellow-400">Outside</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#experiences" className="hover:text-yellow-400 transition-colors duration-200">Experiences</a>
              <button 
                onClick={() => setShowItinerary(true)}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Itinerary
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#experiences" className="block hover:text-yellow-400 transition-colors duration-200">Experiences</a>
              <button 
                onClick={() => setShowItinerary(true)}
                className="block hover:text-yellow-400 transition-colors duration-200 text-left"
              >
                Itinerary
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Mountain className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <div className="text-6xl font-bold text-yellow-400 mb-2">Outside</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Epic Adventures with
            <span className="text-yellow-400"> Legendary Guides</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join world-class athletes and expert guides on transformative journeys to the planet's most spectacular destinations.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200">
            Start Your Adventure
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-yellow-400" />
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expert-Led <span className="text-yellow-400">Adventures</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Embark on carefully curated expeditions led by world-renowned guides and athletes who know these mountains like their own backyard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-200">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  <button 
                    onClick={() => {
                      if (experience.title === "Everest Base Camp") {
                        setShowItinerary(true);
                      }
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
                  >
                    {experience.title === "Everest Base Camp" ? "View Itinerary" : "Learn More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legends Series */}
      <section id="legends" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tag Along with <span className="text-yellow-400">Legends</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join world-class athletes on exclusive adventures. Learn their techniques, hear their stories, and push your own limits alongside true legends.
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {legends.map((legend, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <img 
                    src={legend.image} 
                    alt={legend.title}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className={`space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="inline-block">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Learn from the best
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {legend.title}
                  </h3>
                  
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {legend.description}
                  </p>
                  
                  <div>
                    <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Weekend In-Person <span className="text-yellow-400">Workshops</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Master essential outdoor skills with hands-on workshops led by Gaia & Trailforks power users. Learn, explore, and connect with fellow adventurers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Compass className="h-6 w-6 text-yellow-400 mr-3" />
                  <span>Learn route planning and offline navigation with Gaia GPS & Trailforks power users</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-6 w-6 text-yellow-400 mr-3" />
                  <span>Learn how to customize your ride or hike</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-yellow-400 mr-3" />
                  <span>Get outside & make new friends</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
                Find Weekend Workshop
              </button>
            </div>

            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Upcoming Workshops</h3>
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold">Hiking Navigation Workshop</p>
                      <p className="text-sm text-gray-400">San Francisco, CA</p>
                    </div>
                    <span className="text-yellow-400 font-semibold">JUL 15</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold">Trail Running Clinics</p>
                      <p className="text-sm text-gray-400">Seattle, WA</p>
                    </div>
                    <span className="text-yellow-400 font-semibold">AUG 22</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold">Mountain Biking Fundamentals</p>
                      <p className="text-sm text-gray-400">Denver, CO</p>
                    </div>
                    <span className="text-yellow-400 font-semibold">SEP 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Outside Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">Outside</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-300 transition-colors duration-200">
                <Mountain className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deep Outdoor Expertise</h3>
              <p className="text-gray-400 text-lg">Guided by leading Outside editors, local experts & top athletes</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-300 transition-colors duration-200">
                <Play className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rich Storytelling</h3>
              <p className="text-gray-400 text-lg">Feature articles & Outside TV Documentary capture your journey</p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-300 transition-colors duration-200">
                <Compass className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gaia & Trailforks Navigation</h3>
              <p className="text-gray-400 text-lg">Pre-planned routes & waypoints, 3D preview, offline download, yours to keep forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Adventure <span className="text-yellow-400">Diaries</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Outside TV Documentary captures every moment of your journey
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m4GWYUTFBE0"
                title="Adventure Diaries: Outside TV Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Hook */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready for Your <span className="text-yellow-400">Next Adventure?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-black relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Crown className="h-8 w-8 text-black opacity-20" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Outside+ Member</h3>
                <p className="text-lg mb-6 opacity-90">Early booking & 15% off every getaway.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>Priority booking access</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>15% discount on all adventures</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>Exclusive member-only expeditions</span>
                  </li>
                </ul>
                <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 w-full">
                  Join Outside+
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold mb-4 text-white">General Public</h3>
              <p className="text-lg mb-6 text-gray-300">Standard rate, booking opens 30 days later.</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  <span>Standard booking timeline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  <span>Full price adventures</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                  <span>Access to public expeditions</span>
                </li>
              </ul>
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-200 w-full">
                Browse Adventures
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-yellow-400">Adventurers</span> Say
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-sm text-gray-400">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Let's Go Outside
          </h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Join thousands of adventurers who have discovered their limits and pushed beyond them with Outside.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-200">
              Browse Expeditions
            </button>
            <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Mountain className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold text-yellow-400">Outside</span>
              </div>
              <p className="text-gray-400">
                Epic adventures with legendary guides. Discover your limits and push beyond them.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Expeditions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">US National Parks</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Everest Base Camp</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Ski Swiss Alps</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">All Expeditions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Our Guides</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Safety</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Booking</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Preparation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Insurance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Outside Adventure. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Itinerary Modal */}
      <AnimatePresence>
        {showItinerary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowItinerary(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    5-Day Everest Trek - Namche Bazaar to Lukla
                  </h2>
                  <button
                    onClick={() => setShowItinerary(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="h-8 w-8" />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Map Section */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <img 
                      src="/everest-post-trip.png"
                      alt="5-Day Everest Trek Map"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Itinerary Details */}
                  <div className="space-y-6">
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-yellow-400 mb-4">Trek Overview</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Total Distance</p>
                          <p className="font-semibold text-white">38 miles</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Elevation Gain</p>
                          <p className="font-semibold text-white">8,930 ft</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Duration</p>
                          <p className="font-semibold text-white">5 Days</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Difficulty</p>
                          <p className="font-semibold text-white">Advanced</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">Day 1: Namche Bazaar</h4>
                          <span className="text-sm text-gray-400">11,286 ft</span>
                        </div>
                        <p className="text-gray-300 text-sm">Starting point of our trek, acclimatization and gear check</p>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">Day 2: Tengboche</h4>
                          <span className="text-sm text-gray-400">12,687 ft</span>
                        </div>
                        <p className="text-gray-300 text-sm">Visit the famous Tengboche Monastery with stunning Everest views</p>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-green-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">Day 3: Dingboche</h4>
                          <span className="text-sm text-gray-400">14,469 ft</span>
                        </div>
                        <p className="text-gray-300 text-sm">Acclimatization day with optional hike to Nagarjun Hill</p>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">Day 4: Lobuche</h4>
                          <span className="text-sm text-gray-400">14,469 ft</span>
                        </div>
                        <p className="text-gray-300 text-sm">Trek through the Khumbu Glacier moraine</p>
                      </div>

                      <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-cyan-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">Day 5: Lukla</h4>
                          <span className="text-sm text-gray-400">11,300 ft</span>
                        </div>
                        <p className="text-gray-300 text-sm">Final descent to Lukla for departure</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-6 text-black">
                      <h3 className="text-xl font-bold mb-4">Ready to Join This Adventure?</h3>
                      <p className="mb-4 opacity-90">Experience the majesty of the Himalayas with expert guides and fellow adventurers.</p>
                      <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 w-full">
                        Book Everest Trek
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;