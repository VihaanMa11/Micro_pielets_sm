import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Truck, Package } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import heroBg from '../assets/home_hero_bg.png';
import './PageStyles.css';

const Home = () => {
    const features = [
        {
            icon: <Award size={40} className="text-accent" />,
            title: "Premium Quality",
            desc: "ISO & GMP certified manufacturing ensuring consistent top-tier quality."
        },
        {
            icon: <Globe size={40} className="text-accent" />,
            title: "Global Export",
            desc: "Trusted by brands in Middle East, Africa, Europe & Southeast Asia."
        },
        {
            icon: <Package size={40} className="text-accent" />,
            title: "Bulk Supply",
            desc: "Flexible volume options including 20ft & 40ft container shipments."
        },
        {
            icon: <Truck size={40} className="text-accent" />,
            title: "Reliable Logistics",
            desc: "Seamless end-to-end export logistics with CIF/FOB terms."
        }
    ];

    const products = [
        { name: "Potato Micro Pellets", img: "Potato Pellets" },
        { name: "Corn Micro Pellets", img: "Corn Pellets" },
        { name: "Rice Micro Pellets", img: "Rice Pellets" },
        { name: "Lentil Micro Pellets", img: "Lentil Pellets" }
    ];

    return (
        <div className="page-home">
            {/* Hero Section */}
            <section className="hero" style={{
                backgroundColor: '#111',
                color: 'white',
                padding: '120px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Hero Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.6)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>
                            Premium Micro Pellets Manufacturer & Global Exporter from India
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#ccc', marginBottom: '2.5rem' }}>
                            Supplying fry-ready snack micro pellets to global FMCG brands across the Globe.
                        </p>
                        <div className="btn-group" style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/contact" className="btn btn-primary">Request Export Quote</Link>
                            <Link to="/products" className="btn btn-outline">View Products</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Shareat */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionHeader title="Why Choose Shareat Foods" subtitle="Your trusted partner for high-quality snack manufacturing" />

                    <div className="grid grid-4">
                        {features.map((feature, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                textAlign: 'center'
                            }}>
                                <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
                                <h3 style={{ fontSize: '1.25rem' }}>{feature.title}</h3>
                                <p style={{ color: '#666' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Micro Pellet Range Preview */}
            <section className="section">
                <div className="container">
                    <SectionHeader title="Our Micro Pellet Range" subtitle="Diverse base materials for every snack application" />

                    <div className="grid grid-4">
                        {products.map((product, index) => (
                            <Link to="/products" key={index} style={{
                                display: 'block',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease'
                            }} className="product-card-hover">
                                <div style={{
                                    height: '200px',
                                    backgroundColor: '#eee',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#888',
                                    borderBottom: '4px solid var(--color-accent)'
                                }}>
                                    [Image: {product.img}]
                                </div>
                                <div style={{ padding: '1.5rem', backgroundColor: 'white' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                                    <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/products" className="btn btn-primary">View Full Range</Link>
                    </div>
                </div>
            </section>

            {/* Industries & Export Info */}
            <section className="section" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <SectionHeader title="Global Export Capability" subtitle="Serving the world's leading snack markets" light={true} centered={false} />
                            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                                We specialize in handling large-scale export orders with precision and care. Our logistics team ensures timely delivery to ports across the globe.
                            </p>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {['Middle East', 'Africa', 'Europe', 'Southeast Asia', 'North America', 'Oceania'].map(region => (
                                    <li key={region} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                                        {region}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Start Your Order</Link>
                        </div>
                        <div style={{
                            height: '400px',
                            backgroundColor: '#333',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px dashed #666'
                        }}>
                            [Image Placeholder: World Map / Export Logistics]
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
