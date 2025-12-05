import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, FileCheck, Award, ClipboardCheck } from 'lucide-react';

import headerBg from '../assets/common_header_bg.png';
import './PageStyles.css';
import SEO from '../components/SEO';

const Quality = () => {
    return (
        <div className="page-quality">
            <SEO
                title="Quality Snack Micro Pellets | ISO 22000 & GMP Certified"
                description="Shareat Foods ensures top-tier quality Snack Micro Pellets with ISO 22000:2018, GMP, and FSSAI certifications. Rigorous testing for global export standards."
                keywords="Snack Micro Pellets Quality, ISO 22000 Certified, GMP Certified, FSSAI Licensed, Food Safety Management, Quality Control Snacks, Export Documentation"
                url="/quality"
            />
            {/* Hero Banner */}
            <div className="page-banner" style={{
                backgroundImage: `url(${headerBg})`,
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="page-banner-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}></div>
                <h1 style={{ position: 'relative', zIndex: 1, color: 'white' }}>Quality & Certifications</h1>
            </div>

            {/* Certifications */}
            <section className="section">
                <div className="container">
                    <SectionHeader title="International Standards" subtitle="Committed to global food safety norms" />

                    <div className="grid grid-3 text-center">
                        <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
                            <Award size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3>ISO 22000:2018</h3>
                            <p style={{ color: '#666' }}>Certified Food Safety Management System</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
                            <ShieldCheck size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3>GMP Certified</h3>
                            <p style={{ color: '#666' }}>Good Manufacturing Practices compliant facility</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
                            <FileCheck size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h3>FSSAI Licensed</h3>
                            <p style={{ color: '#666' }}>Food Safety and Standards Authority of India approved</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Control Process */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionHeader title="Our Quality Control Process" subtitle="Rigorous testing from farm to factory" />

                    <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <ClipboardCheck className="text-accent" /> Raw Material Sourcing
                                </h3>
                                <p style={{ color: '#666', marginLeft: '34px' }}>
                                    We source only the finest grains and raw materials from certified suppliers, ensuring purity and consistency at the source.
                                </p>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <ClipboardCheck className="text-accent" /> In-Process Testing
                                </h3>
                                <p style={{ color: '#666', marginLeft: '34px' }}>
                                    Continuous monitoring of moisture content, expansion ratio, and texture during the manufacturing process.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <ClipboardCheck className="text-accent" /> Final Inspection
                                </h3>
                                <p style={{ color: '#666', marginLeft: '34px' }}>
                                    Every batch undergoes strict sensory and laboratory analysis before packaging and dispatch.
                                </p>
                            </div>
                        </div>

                        <div style={{
                            height: '400px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#888',
                            border: '2px dashed #ddd'
                        }}>
                            [Image Placeholder: Quality Lab / Testing Equipment]
                        </div>
                    </div>
                </div>
            </section>

            {/* Export Documentation */}
            <section className="section bg-black text-white">
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Export Documentation Support</h2>
                    <p style={{ color: '#ccc', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        We provide comprehensive documentation support for smooth customs clearance, including Certificate of Analysis (COA),
                        Health Certificates, Origin Certificates, and more.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {['COA', 'Health Certificate', 'Phytosanitary', 'Certificate of Origin'].map(doc => (
                            <span key={doc} style={{
                                padding: '8px 16px',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                color: '#aaa'
                            }}>
                                {doc}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quality;
