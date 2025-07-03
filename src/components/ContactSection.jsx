/* =========================
   Contact Form Component
   A comprehensive contact section with form and contact information
   Includes email functionality, form validation, and social links
   ========================= */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = ({ darkMode }) => {
  /* =========================
     State Management
     Handles form data, validation errors, and submission status
     ========================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /* =========================
     Form Event Handlers
     Manages form input changes and validation
     ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* =========================
     Form Validation
     Checks required fields and email format
     Returns boolean indicating form validity
     ========================= */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     Form Submission Handler
     Processes form submission using EmailJS
     Manages success/error states
     ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_EMAILJS_SERVICE_ID",
        "YOUR_EMAILJS_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_EMAILJS_USER_ID"
      );
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* =========================
          Section Header
          Animated title and description
          ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 font-['Poppins'] ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Get In Touch
        </h2>
        <div
          className={`w-20 h-1 mx-auto rounded-full ${darkMode ? "bg-teal-500" : "bg-blue-600"
            }`}
        />
        <p
          className={`text-xl mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          Let's discuss your next project
        </p>
      </motion.div>

      {/* =========================
          Main Content Grid
          Two-column layout for form and contact info
          ========================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* =========================
            Contact Form Section
            Animated form with input validation
            ========================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-8 rounded-xl shadow-lg ${darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
            }`}
        >
          <h3
            className={`text-2xl font-semibold mb-6 text-center ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Send Message
          </h3>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input Field */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  } ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input Field */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  } ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Input Field */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  } ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button with Loading State */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${darkMode
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
                } disabled:opacity-70`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Success Message Animation */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-3 text-green-500 bg-green-500/10 rounded-lg"
              >
                ✨ Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* =========================
            Contact Information Section
            Displays contact details and social links
            ========================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-8 rounded-xl shadow-lg ${darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
            }`}
        >
          <h3
            className={`text-2xl font-semibold mb-8 text-center ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Contact Info
          </h3>

          {/* Contact Details Container */}
          <div className="space-y-6">
            {/* Phone Number */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-teal-500/20" : "bg-blue-100"
                  }`}
              >
                <HiPhone
                  className={`text-xl ${darkMode ? "text-teal-400" : "text-blue-600"
                    }`}
                />
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  Phone
                </p>
                <a
                  href="tel:+916200584954"
                  className={`text-lg font-semibold transition-colors ${darkMode
                    ? "text-white hover:text-teal-400"
                    : "text-gray-900 hover:text-blue-600"
                    }`}
                >
                  +91 6200584954
                </a>
              </div>
            </motion.div>

            {/* Email Address */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-teal-500/20" : "bg-blue-100"
                  }`}
              >
                <HiMail
                  className={`text-xl ${darkMode ? "text-teal-400" : "text-blue-600"
                    }`}
                />
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  Email
                </p>
                <a
                  href="mailto:sauravi78chavan@gmail.com"
                  className={`text-lg font-semibold transition-colors ${darkMode
                    ? "text-white hover:text-teal-400"
                    : "text-gray-900 hover:text-blue-600"
                    }`}
                >
                  ksaurabh252@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Location Information */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-teal-500/20" : "bg-blue-100"
                  }`}
              >
                <HiLocationMarker
                  className={`text-xl ${darkMode ? "text-teal-400" : "text-blue-600"
                    }`}
                />
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  Location
                </p>
                <p
                  className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  Gaya, Bihar
                </p>
              </div>
            </motion.div>

            {/* Social Media Links Section */}
            <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
              <p
                className={`text-sm font-medium mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                Connect with me
              </p>
              <div className="flex gap-4">
                {/* GitHub Link */}
                <motion.a
                  href="https://github.com/ksaurabh252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    }`}
                >
                  <FaGithub size={20} />
                </motion.a>

                {/* LinkedIn Link */}
                <motion.a
                  href="https://www.linkedin.com/in/ksaurabh252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    }`}
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
