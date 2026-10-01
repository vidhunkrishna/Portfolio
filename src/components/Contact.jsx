import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Spam prevention hidden field
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.honeypot) {
      setStatus({ submitting: false, success: true, error: null });
      return;
    }

    // Input Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Read environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gpf2srg';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_p2mr52z';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'bOdGaDAyK2gcmvbz4';

    try {
      // Map all standard template parameters to ensure compatibility with any template variable names
      const templateParams = {
        from_name: formData.name,
        user_name: formData.name,
        name: formData.name,
        from_email: formData.email,
        user_email: formData.email,
        email: formData.email,
        reply_to: formData.email,
        subject: formData.subject || 'Portfolio Inquiry',
        message: formData.message,
        to_name: 'Vidhun Krishna S'
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200 || result.text === 'OK') {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        throw new Error(`EmailJS status ${result.status}: ${result.text}`);
      }
    } catch (err) {
      console.error("EmailJS Submission Error:", err);
      const errDetail = err?.text || err?.message || 'Failed to send message.';
      setStatus({
        submitting: false,
        success: false,
        error: `${errDetail} (Or email directly to vidhunkrishna903@gmail.com)`
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono-code text-xs font-semibold tracking-wider mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LET'S WORK <span className="text-orange-500">TOGETHER</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Have a project idea, opportunity, or technical inquiry? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0f0f14] border border-neutral-800/90 rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>

              {/* Email Card */}
              <a
                href={PERSONAL_INFO.socials.email}
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-neutral-400">Direct Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-neutral-400">Location</div>
                  <div className="text-sm font-bold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>


            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0f0f14] border border-neutral-800/90 rounded-3xl p-8 sm:p-10 shadow-2xl">

              {status.success ? (
                /* Success Message State */
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out! Your message has been delivered to Vidhun Krishna S.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, success: false, error: null })}
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                  {/* Honeypot field for bot spam prevention */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Error Alert */}
                  {status.error && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code font-bold text-neutral-300 uppercase tracking-wider">
                        YOUR NAME <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code font-bold text-neutral-300 uppercase tracking-wider">
                        YOUR EMAIL <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code font-bold text-neutral-300 uppercase tracking-wider">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Opportunity / Technical Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code font-bold text-neutral-300 uppercase tracking-wider">
                      MESSAGE <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-xl shadow-orange-500/20 active:scale-[0.99]"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SENDING MESSAGE...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND MESSAGE
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
