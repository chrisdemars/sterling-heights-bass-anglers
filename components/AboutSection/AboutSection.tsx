import { Target, Award, Fish } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-fishing-black mb-6">
              About Our Club
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founded in 1989, the Sterling Heights Bass Anglers has been bringing
              together passionate bass fishing enthusiasts from across Southeast Michigan.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-fishing-lime/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-fishing-lime/20 transition-colors duration-300">
                <Target className="text-fishing-lime w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-fishing-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To promote bass fishing through education, conservation, and friendly competition
                while building lasting friendships on the water.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-fishing-lime/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-fishing-lime/20 transition-colors duration-300">
                <Award className="text-fishing-lime w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-fishing-black mb-4">Tournaments</h3>
              <p className="text-gray-600">
                We host monthly tournaments on various lakes throughout Southeast Michigan,
                from beginners to seasoned pros.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-fishing-lime/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-fishing-lime/20 transition-colors duration-300">
                <Fish className="text-fishing-lime w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-fishing-black mb-4">Conservation</h3>
              <p className="text-gray-600">
                We're committed to protecting Michigan's bass populations through
                catch-and-release practices and habitat conservation efforts.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-fishing-black rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Adventure?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Whether you're a tournament angler or just love being on the water,
              there's a place for you in our club.
            </p>
            <button className="bg-fishing-lime text-fishing-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-colors duration-300 transform hover:scale-105">
              Become a Member Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}