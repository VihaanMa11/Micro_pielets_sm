import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
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
                                        <p style={{ color: '#666' }}>123 Industrial Estate, Phase IV,<br />Ahmedabad, Gujarat, India - 380001</p>
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
                                        <p style={{ color: '#666' }}>+91 98765 43210 (Export Division)</p>
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
                            <form>
                                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                        <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Company Name</label>
                                        <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="Your Company Ltd." />
                                    </div>
                                </div>

                                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                                        <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                                        <input type="tel" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="+1 234 567 890" />
                                    </div>
                                </div>

                                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Country</label>
                                        <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="Target Market" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Product Interest</label>
                                        <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                                            <option>Select Product</option>
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
                                    <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="e.g. 1 x 20ft Container per month" />
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message / Specific Requirements</label>
                                    <textarea rows="4" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }} placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    Send Enquiry <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section style={{ height: '400px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', borderTop: '1px solid #ddd' }}>
                [Google Map Placeholder: Ahmedabad Location]
            </section>
        </div>
    );
};

export default Contact;
