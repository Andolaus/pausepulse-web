'use client'; // This directive is correct for Next.js App Router components

import { useState } from 'react';
// Import new icons for visual enhancement (you'll need to install react-icons if not already: npm install react-icons)
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'; 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading indicator

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    // Simulate an API call. In a real application, replace this with your actual backend call.
    // This timeout simulates network latency.
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    setSubmitted(true); // Indicate success
    setIsSubmitting(false); // Reset submitting state
    setForm({ name: '', email: '', message: '' }); // Optionally clear the form after submission

    // Example of a real API call (uncomment and replace with your logic):
    /*
    try {
      const response = await fetch('/api/contact', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        // Handle API errors (e.g., show an error message to the user)
        console.error('Form submission failed:', response.statusText);
        alert('Failed to send message. Please try again later.'); // Simple error alert
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  return (
    <section 
      className="bg-gradient-to-br from-emerald-50 to-purple-50 dark:from-gray-950 dark:to-purple-900 
                 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800" 
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Updated Heading with an Icon for visual flair */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 
                       flex items-center justify-center gap-4"> {/* Added flex, items-center, justify-center, gap */}
          <FaPaperPlane className="text-emerald-600 dark:text-emerald-400 text-4xl sm:text-5xl" /> 
          Let's Connect
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"> {/* Added max-w-2xl mx-auto */}
          Have a question, feedback, or just want to say hi? We'd love to hear from you.
        </p>

        {/* Form Card Container - A distinct, elevated card for the form */}
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl 
                        border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto"> {/* Added max-w-2xl mx-auto to center and limit width */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid gap-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  // Slightly tweaked input background in dark mode, and transition for focus
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                             transition-all duration-200" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                             transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                             transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
                className={`inline-block w-full text-white font-bold py-3 rounded-lg shadow-md 
                            transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75
                            ${isSubmitting 
                              ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' // Grey out and disable when submitting
                              : 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600' // Normal state
                            }`}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'} {/* Dynamic text */}
              </button>
            </form>
          ) : (
            // Enhanced Success Message with icon, better spacing, and a "send another" button
            <div className="flex flex-col items-center justify-center p-8 bg-emerald-50 dark:bg-emerald-900 rounded-2xl 
                            text-emerald-800 dark:text-emerald-200 shadow-inner"> {/* Softer background and text for success */}
              <FaCheckCircle className="text-5xl mb-4" /> {/* Larger icon */}
              <p className="text-2xl font-bold mb-2">Message Sent!</p>
              <p className="text-lg text-center mb-4">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)} // Allow submitting another message
                className="mt-4 px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white 
                           rounded-full font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 
                           transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}