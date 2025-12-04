import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Flame, Utensils, Zap, Heart, ChefHat } from 'lucide-react';
import processingLineImage from '../assets/industrial_processing_line.png';
import headerBg from '../assets/common_header_bg.png';
import './Applications.css';
import './PageStyles.css';
import SEO from '../components/SEO';

const Applications = () => {
    const applications = [
        {
            title: "Fried Snacks",
            icon: <Flame size={32} className="text-accent" />,
            desc: "Classic fried pellets with superior expansion and oil absorption control.",
            img: "Fried Snack Bowl"
        },
        {
            title: "Baked Snacks",
            icon: <ChefHat size={32} className="text-accent" />,
            desc: "Healthier baked options that retain crunch without excess oil.",
            img: "Baked Chips"
        },
        {
            title: "Hot-Air Puffing",
            icon: <Zap size={32} className="text-accent" />,
            desc: "Ideal for modern hot-air puffing technologies for light, airy snacks.",
            img: "Puffed Snacks"
        },
        {
            title: "Protein Snacks",
            icon: <Utensils size={32} className="text-accent" />,
            desc: "High-protein formulations suitable for fitness and functional food markets.",
            img: "Protein Bars/Chips"
        },
        {
            title: "Healthy Millet Snacks",
            icon: <Heart size={32} className="text-accent" />,
            desc: "Nutrient-rich millet-based snacks for the health-conscious consumer.",
            img: "Millet Crackers"
        },
        {
            title: "Extruded Chips & Namkeen",
            icon: <Package size={32} className="text-accent" />, // Using Package as placeholder for Namkeen
            desc: "Versatile bases for traditional Indian namkeen and extruded chip varieties.",
            img: "Namkeen Mix"
        }
    ];

    return (
        <div className="page-applications">
            <SEO
                title="Snack Applications | Fried, Baked & Puffed Snack Solutions"
                description="Versatile micro pellet applications for fried snacks, baked chips, healthy millet snacks, and protein bars. Compatible with standard processing lines."
                keywords="Fried Snacks, Baked Chips, Puffed Snacks, Protein Snacks, Millet Snacks, Snack Manufacturing Applications"
                url="/applications"
            />
            {/* Hero Banner */}
            <div className="page-banner" style={{
                backgroundImage: `url(${headerBg})`,
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="page-banner-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}></div>
                <h1 style={{ position: 'relative', zIndex: 1, color: 'black' }}>Snack Applications</h1>
            </div>

            <section className="section">
                <div className="container">
                    <SectionHeader title="Versatile Snack Solutions" subtitle="One pellet, endless possibilities" />

                    <div className="grid grid-3">
                        {applications.map((app, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                border: '1px solid #eee'
                            }}>
                                <div style={{
                                    height: '200px',
                                    backgroundColor: '#f5f5f5',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#888',
                                    borderBottom: '1px solid #eee'
                                }}>
                                    [Image: {app.img}]
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                        {app.icon}
                                        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{app.title}</h3>
                                    </div>
                                    <p style={{ color: '#666' }}>{app.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processing Compatibility */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionHeader title="Processing Compatibility" subtitle="Engineered for your production lines" />
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#555' }}>
                                Our micro pellets are designed to be compatible with standard industrial frying and processing equipment.
                                Whether you use continuous fryers, batch fryers, or hot-air poppers, our pellets ensure consistent results every time.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                                {['Standard Fryers', 'Hot Air Poppers', 'Baking Ovens', 'Microwave Expansion'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: 'var(--color-primary)' }}>
                                        <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            height: '300px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#888',
                            border: '2px dashed #ddd',
                            overflow: 'hidden'
                        }}>
                            <img src={processingLineImage} alt="Industrial Processing Line" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper component for icon
import { Package } from 'lucide-react';

export default Applications;
