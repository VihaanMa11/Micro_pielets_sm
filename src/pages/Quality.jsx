import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, FileCheck, Award, ClipboardCheck } from 'lucide-react';

const Quality = () => {
    return (
        <div className="page-quality">
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
                        [Quality Banner: Lab / Testing / Certifications]
                    </span>
                </div>
                <h1 style={{ position: 'relative', zIndex: 1 }}>Quality & Certifications</h1>
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
