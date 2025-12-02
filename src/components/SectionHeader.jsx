import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true, light = false }) => {
    return (
        <div className={`section-header ${centered ? 'text-center' : ''} ${light ? 'text-white' : ''}`} style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: light ? 'white' : 'var(--color-primary)' }}>{title}</h2>
            {subtitle && <p className="text-xl" style={{ color: light ? '#ccc' : '#666', maxWidth: '800px', margin: centered ? '0 auto' : '0' }}>{subtitle}</p>}
            <div style={{
                width: '60px',
                height: '4px',
                backgroundColor: 'var(--color-accent)',
                margin: centered ? '1rem auto 0' : '1rem 0 0'
            }}></div>
        </div>
    );
};

export default SectionHeader;
