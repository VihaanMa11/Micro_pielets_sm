import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        productInterest: '',
        quantity: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        // EmailJS configuration
        const serviceId = 'service_m1ejb7j'; // You'll need to replace this
        const templateId = 'template_0rpu23d'; // You'll need to replace this
        const publicKey = '7GSls6gryfzTYBWHJ'; // You'll need to replace this

        try {
            const templateParams = {
                to_email: 'shareatmarketing@gmail.com',
                from_name: formData.fullName,
                company_name: formData.companyName,
                from_email: formData.email,
                phone: formData.phone,
                country: formData.country,
                product_interest: formData.productInterest,
                quantity: formData.quantity,
                message: formData.message
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your enquiry has been sent successfully. We will get back to you soon.'
            });

            // Clear form
            setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                country: '',
                productInterest: '',
                quantity: '',
                message: ''
            });
        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error sending your enquiry. Please try again or email us directly at shareatmarketing@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="page-contact">
            {/* Hero Banner */}
            <div style={{
                height: '300px',
                backgroundColor: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: '#222',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <span style={{ border: '2px dashed #555', padding: '20px', color: '#777' }}>
                        [Contact Banner: Global Connectivity]
                    </span>
                </div>
                <h1 style={{ position: 'relative', zIndex: 1 }}>Contact Us / Export Enquiry</h1>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '4rem' }}>

                        {/* Contact Info */}
                        <div>
                            <SectionHeader title="Get in Touch" subtitle="We are here to answer your questions and discuss your export requirements." centered={false} />

                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Head Office & Factory</h4>
                                        <p style={{ color: '#666' }}>Block No. 212/2, A Innovative Road,<br /> B/H Intas Pharma Unit 2,<br />Matoda Patia,, Ahmedabad, Gujarat 382213</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Us</h4>
                                        <p style={{ color: '#666' }}><a href="mailto:info@shareatfoods.com">info@shareatfoods.com</a></p>
                                        <p style={{ color: '#666' }}><a href="mailto:export@shareatfoods.com">export@shareatfoods.com</a></p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Call Us</h4>
                                        <p style={{ color: '#666' }}>+91 </p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Export Highlights</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                                        20 ft & 40 ft Container Shipments
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                                        CIF / FOB / CNF Terms Available
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                                        Private Labeling & Bulk Supply
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Enquiry Form */}
                        <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Export Enquiry Form</h3>

                            {/* Status Message */}
                            {submitStatus.message && (
                                <div style={{
                                    padding: '1rem',
                                    marginBottom: '1.5rem',
                                    borderRadius: '4px',
                                    backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                    color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                    border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                }}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Company Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                            placeholder="+1 234 567 890"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Country *</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                            placeholder="Target Market"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Product Interest *</label>
                                        <select
                                            name="productInterest"
                                            value={formData.productInterest}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                        >
                                            <option value="">Select Product</option>
                                            <option>Potato Pellets</option>
                                            <option>Corn Pellets</option>
                                            <option>Rice Pellets</option>
                                            <option>Lentil/Millet Pellets</option>
                                            <option>Multiple / Mixed Container</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Estimated Quantity</label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                                        placeholder="e.g. 1 x 20ft Container per month"
                                    />
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message / Specific Requirements</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Enquiry'} <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section style={{ height: '400px', backgroundColor: '#eee', borderTop: '1px solid #ddd' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58878.85959999999!2d72.2605133!3d22.8778359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e96b9c3aab0fd%3A0x4f95328aec17a0ed!2sShareat%20-%20A.%20Innovative%20Food%20Products%20Limited!5e0!3m2!1sen!2sin!4v1733303514000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shareat Foods Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
