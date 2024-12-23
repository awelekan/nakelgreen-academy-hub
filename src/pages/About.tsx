import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Nakelgreen</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering individuals with cutting-edge tech education since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Nakelgreen, we believe in transforming lives through quality education in technology. 
                Our mission is to make tech education accessible, practical, and aligned with industry needs.
              </p>
              <Button>Learn More</Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Quality Content</h3>
                <p className="text-gray-600">Comprehensive curriculum</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Industry-recognized certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from curriculum development to student support.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and teaching methods to provide the best learning experience.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where students can learn, grow, and network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;