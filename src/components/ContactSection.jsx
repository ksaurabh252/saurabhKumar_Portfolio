import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, 'YOUR_EMAILJS_USER_ID');

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden"
      style={{ backgroundColor: '#080710' }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[200px] h-[200px] rounded-full -left-[80px] -top-[80px]"
          style={{
            background: 'linear-gradient(#1845ad, #23a2f6)'
          }}
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-[200px] h-[200px] rounded-full -right-[30px] -bottom-[80px]"
          style={{
            background: 'linear-gradient(to right, #ff512f, #f09819)'
          }}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Contact Form - Glassmorphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md"
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-12 rounded-xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.13)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 40px rgba(8,7,16,0.6)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <h3 className="text-3xl font-medium text-center text-white mb-8 tracking-wide">
                Send Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-white text-base font-medium mb-2 tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="block w-full h-12 px-3 rounded-sm text-white text-sm font-light tracking-wide placeholder-gray-300 outline-none border-none"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.07)'
                    }}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-white text-base font-medium mb-2 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="block w-full h-12 px-3 rounded-sm text-white text-sm font-light tracking-wide placeholder-gray-300 outline-none border-none"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.07)'
                    }}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-white text-base font-medium mb-2 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="block w-full px-3 py-3 rounded-sm text-white text-sm font-light tracking-wide placeholder-gray-300 outline-none border-none resize-none"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.07)'
                    }}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-md text-lg font-semibold tracking-wide cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#080710'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-3 text-green-300 bg-green-500/20 rounded-md"
                  >
                    ✨ Message sent successfully!
                  </motion.div>
                )}

                {/* Social Links */}
                <div className="flex gap-3 mt-8">
                  <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      backgroundColor: 'rgba(255,255,255,0.47)',
                      scale: 1.05
                    }}
                    className="flex-1 py-3 px-4 rounded-sm text-center text-white tracking-wide transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.27)'
                    }}
                  >
                    <FaGithub className="inline mr-2" />
                    GitHub
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      backgroundColor: 'rgba(255,255,255,0.47)',
                      scale: 1.05
                    }}
                    className="flex-1 py-3 px-4 rounded-sm text-center text-white tracking-wide transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.27)'
                    }}
                  >
                    <FaLinkedin className="inline mr-2" />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Contact Info - Matching Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-md"
          >
            <div
              className="relative p-12 rounded-xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.13)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 40px rgba(8,7,16,0.6)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <h3 className="text-3xl font-medium text-center text-white mb-8 tracking-wide">
                Contact Info
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)'
                  }}
                >
                  <HiPhone className="text-2xl text-blue-400" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium tracking-wide">Phone</p>
                    <a
                      href="tel:+919284958047"
                      className="text-white text-lg font-light tracking-wide hover:text-blue-400 transition-colors"
                    >
                      +91 6200584954
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)'
                  }}
                >
                  <HiMail className="text-2xl text-orange-400" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium tracking-wide">Email</p>
                    <a
                      href="mailto:ksaurabh252@gmail.com"
                      className="text-white text-lg font-light tracking-wide hover:text-orange-400 transition-colors"
                    >
                      sauravi78chavan@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)'
                  }}
                >
                  <HiLocationMarker className="text-2xl text-purple-400" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium tracking-wide">Location</p>
                    <p className="text-white text-lg font-light tracking-wide">
                      Gaya, Bihar
                    </p>
                  </div>
                </motion.div>

                <div className="pt-6 border-t border-white/20">
                  {/* <p className="text-center text-gray-300 text-sm font-medium mb-4 tracking-wide">
                    Follow me on social media
                  </p> */}
                  <div className="flex gap-3">

                    <motion.a
                      href="mailto:sauravi78chavan@gmail.com"
                      whileHover={{
                        backgroundColor: 'rgba(255,255,255,0.47)',
                        scale: 1.05
                      }}
                      className="flex-1 py-2 px-3 rounded-sm text-center text-white text-sm tracking-wide transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.27)'
                      }}
                    >
                      <HiMail className="inline mr-1" />
                      Email
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
