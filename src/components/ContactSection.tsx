
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+50687090777";
    const message = "Hello Michael, I'm inquiring about the 4-unit property in El Castillo for $499,000.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast({
      title: "Message Sent!",
      description: "Michael will get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
            Contact Michael Copeland to Learn More
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Ready to take the next step? Get in touch to schedule a viewing or ask any questions 
            about this exceptional investment opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          {/* WhatsApp CTA */}
          <div className="bg-green-50 rounded-xl md:rounded-2xl p-4 md:p-8 text-center">
            <div className="text-4xl md:text-6xl mb-3 md:mb-6">💬</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
              Fastest Response via WhatsApp
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-8 lg:text-lg">
              Get instant answers to your questions and schedule a property viewing directly with Michael.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl w-full"
            >
              💬 Click Here to Chat on WhatsApp
            </Button>
            <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-4">
              Message will be pre-filled with your inquiry details
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
              Or Send an Email
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your interest in the property..."
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 md:py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-16 text-center">
          <div className="bg-emerald-600 text-white rounded-xl md:rounded-2xl p-4 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Michael Copeland</h3>
            <p className="text-sm md:text-base text-emerald-100 mb-2 md:mb-4">Property Owner & Investment Specialist</p>
            <div className="space-y-1 md:space-y-2">
              <p className="text-sm md:text-base text-emerald-100">📱 WhatsApp: +506 8709-0777</p>
              <p className="text-sm md:text-base text-emerald-100">📧 Email: xmrtsolutions@gmail.com</p>
              <p className="text-sm md:text-base text-emerald-100">📍 El Castillo, Costa Rica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
