import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Target, Eye, Truck, ShieldCheck, Factory } from 'lucide-react';

const About = () => {
    return (
        <div className="page-about">
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
                        [About Us Banner: Factory / Global Team]
                    </span>
                </div>
                <h1 style={{ position: 'relative', zIndex: 1 }}>About Shareat Foods</h1>
            </div>

            {/* Company Overview */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <SectionHeader title="Who We Are" subtitle="Leading Indian Manufacturer & Exporter" centered={false} />
                            <p style={{ marginBottom: '1rem', color: '#555' }}>
                                Shareat Foods is a premier manufacturer and exporter of high-quality snack micro pellets based in Ahmedabad, Gujarat, India.
                                With state-of-the-art manufacturing facilities and a commitment to excellence, we supply fry-ready pellets to major FMCG brands,
                                private label manufacturers, and distributors worldwide.
                            </p>
                            <p style={{ color: '#555' }}>
                                Our expertise lies in creating innovative, consistent, and delicious snack bases using diverse ingredients like Potato, Corn, Rice, Lentils, and Multigrains.
                            </p>
                        </div>
                        <div style={{
                            height: '300px',
                            backgroundColor: '#eee',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#888'
                        }}>
                            [Image: Factory / Production Line]
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section bg-black text-white">
                <div className="container">
                    <div className="grid grid-2">
                        <div style={{ padding: '2rem', border: '1px solid #333', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Eye size={32} className="text-accent" />
                                <h3 style={{ color: 'white', margin: 0 }}>Our Vision</h3>
                            </div>
                            <p style={{ color: '#ccc' }}>
                                To become the world's most trusted partner for innovative snack solutions, setting global benchmarks in quality, taste, and consistency.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid #333', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Target size={32} className="text-accent" />
                                <h3 style={{ color: 'white', margin: 0 }}>Our Mission</h3>
                            </div>
                            <p style={{ color: '#ccc' }}>
                                To deliver superior quality micro pellets that enable our clients to create market-leading snack products, while maintaining sustainable practices and ethical business standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing & R&D */}
            <section className="section">
                <div className="container">
                    <SectionHeader title="Manufacturing & R&D" subtitle="Innovation at the core of our operations" />
                    <div className="grid grid-3">
                        <div className="text-center">
                            <Factory size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3>Advanced Technology</h3>
                            <p style={{ color: '#666' }}>European processing lines ensuring precise texture and expansion.</p>
                        </div>
                        <div className="text-center">
                            <ShieldCheck size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3>Quality Control</h3>
                            <p style={{ color: '#666' }}>Rigorous testing at every stage from raw material to finished product.</p>
                        </div>
                        <div className="text-center">
                            <Truck size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3>Global Logistics</h3>
                            <p style={{ color: '#666' }}>Efficient supply chain management for timely international deliveries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Export Map Placeholder */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionHeader title="Global Footprint" subtitle="Exporting to over 20+ countries" />
                    <div style={{
                        height: '500px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#888',
                        border: '2px dashed #ddd'
                    }}>
                        [Image Placeholder: World Map Highlighting Export Markets (Middle East, Africa, Europe, Asia)]
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
