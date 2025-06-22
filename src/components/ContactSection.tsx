
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
    const phoneNumber = "+50612345678"; // Replace with Michael's actual number
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Michael Copeland to Learn More
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step? Get in touch to schedule a viewing or ask any questions 
            about this exceptional investment opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* WhatsApp CTA */}
          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Fastest Response via WhatsApp
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Get instant answers to your questions and schedule a property viewing directly with Michael.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl w-full"
            >
              💬 Click Here to Chat on WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Message will be pre-filled with your inquiry details
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Or Send an Email
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-emerald-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Michael Copeland</h3>
            <p className="text-emerald-100 mb-4">Property Owner & Investment Specialist</p>
            <div className="space-y-2">
              <p className="text-emerald-100">📱 WhatsApp: +506 1234-5678</p>
              <p className="text-emerald-100">📧 Email: michael@example.com</p>
              <p className="text-emerald-100">📍 El Castillo, Costa Rica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
