import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer comprehensive courses in Data Analytics, Python Programming, Django Development, and Cybersecurity. Each course is designed to provide both theoretical knowledge and practical skills.",
  },
  {
    question: "How long are the courses?",
    answer: "Course duration varies depending on the program. Most courses run for 12-16 weeks, with flexible scheduling options available for working professionals.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Yes, our courses are designed for various skill levels. We have beginner-friendly courses that start from the basics, as well as advanced courses for experienced professionals.",
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we offer career support services including resume reviews, interview preparation, and connections with our industry partners for job opportunities.",
  },
  {
    question: "What is the course fee structure?",
    answer: "Course fees vary by program. We offer flexible payment plans and early bird discounts. Contact our admissions team for detailed pricing information.",
  },
  {
    question: "Do you offer certificates upon completion?",
    answer: "Yes, upon successful completion of the course, students receive an industry-recognized certificate from Nakelgreen.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses and programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;