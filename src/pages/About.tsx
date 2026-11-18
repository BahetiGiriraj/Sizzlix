import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-primary-100">
            Big flavours. Zero restaurant bills. Just Sizzlix!
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            Why settle for ordinary when every meal can taste extraordinary? From fiery Schezwan and tangy Red Chilli to rich Dark Soya and our Pizza Pasta Sauce made from handpicked tomatoes, Sizzlix brings the favourites of restaurant-style flavours straight to your kitchen.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            Whether it's a quick evening snack, a delicious Indo-Chinese feast or a comforting bowl of pasta, give every dish that extra burst of flavour. Just pour, cook and let the magic happen!
          </p>
          <p className="text-lg text-white/90 leading-relaxed italic">
            Your kitchen. Your cravings. Your flavours, with just a little bit of our goodness.
          </p>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Who Are We?
            </h2>
            <p className="text-xl font-semibold text-primary-600 mb-8">
              Three women. One vision, and a whole lot of flavour!
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Sizzlix, we believe great food deserves great flavour. From the women that lead our households to the women that lead our food production, we are on a mission to make every meal more exciting, delicious and memorable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From bold Indo-Chinese sauces to irresistible Italian favourites, we create flavours that bring restaurant-style experiences right into your home. Crafted with passion, driven by innovation and inspired by the food we all love, our products are made to turn everyday cooking into something worth looking forward to.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We aren't just making sauces; we're adding a little magic to every meal.
            </p>
            <p className="text-lg font-semibold text-primary-700 italic text-center">
              Born from passion. Made for your cravings. That's Sizzlix!
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl font-semibold text-primary-600">
              It Started With a Craving. It Became Sizzlix!
            </p>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Every great food experience begins with one thing — flavour. And we want to elevate it for you!
            </p>
            <p>
              Back in 2025, we had a simple thought: why should enjoying restaurant-style food be limited to restaurants? Why couldn't the same bold, exciting flavours become a part of everyday home cooking?
            </p>
            <p className="text-primary-700 font-semibold text-xl text-center py-2">
              This simple thought birthed the idea we now lovingly call Sizzlix!
            </p>
            <p>
              Founded by three women with a shared vision, Sizzlix was born to bring more excitement, creativity and convenience into Indian kitchens. We set out to create sauces that make cooking easier, experimenting more fun and every meal a little more special.
            </p>
            <p>
              From the fiery kick of Schezwan to the rich goodness of Italian-inspired sauces, our range is all about giving food the flavour it deserves.
            </p>
            <p>
              Today, we're here for the midnight Maggi experiments, the Sunday pasta cravings, the spontaneous Indo-Chinese nights and every little moment when good food makes everything better.
            </p>
            <p>
              Because we believe cooking shouldn't be complicated, and great flavour shouldn't be hard to find.
            </p>
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8 text-center mt-8">
              <p className="text-xl font-semibold mb-2">
                We started with a craving. We're growing with a passion. And we're just getting started!
              </p>
              <p className="text-2xl font-display font-bold mt-4">
                Welcome to Sizzlix. ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore career opportunities and be part of something exceptional
          </p>
          <Link
            to="/careers"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;
