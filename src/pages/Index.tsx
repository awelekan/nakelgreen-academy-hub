import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Star, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const courses = [
  {
    title: "Data Analytics",
    description: "Master data analysis with Python, SQL, and visualization tools",
    icon: BookOpen,
    price: "$999",
  },
  {
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts",
    icon: Users,
    price: "$799",
  },
  {
    title: "Django Development",
    description: "Build web applications with Django framework",
    icon: Star,
    price: "$899",
  },
  {
    title: "Cybersecurity",
    description: "Understand security principles and best practices",
    icon: MessageSquare,
    price: "$1299",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Analyst",
    content: "The Data Analytics course completely transformed my career path. The instructors were exceptional!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "Learning Python through Nakelgreen was the best decision I made for my professional growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
  },
];

const stats = [
  { label: "Students Trained", value: 5000 },
  { label: "Course Completion Rate", value: 95 },
  { label: "Expert Instructors", value: 50 },
  { label: "Industry Partners", value: 100 },
];

const Index = () => {
  const { toast } = useToast();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    toast({
      title: "Welcome to Nakelgreen!",
      description: "We'll contact you shortly about our courses.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Career with Tech Education
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students learning the most in-demand tech skills with industry experts.
            </p>
            <Button size="lg" onClick={handleGetStarted}>
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div key={course.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <course.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-primary font-bold">{course.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}+</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonials[currentTestimonial].content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;