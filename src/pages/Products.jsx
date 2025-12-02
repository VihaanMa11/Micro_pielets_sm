import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle, Package } from 'lucide-react';

const Products = () => {
    const productList = [
        {
            id: 'potato',
            name: 'Potato Micro Pellets',
            desc: 'High-quality potato-based pellets offering excellent expansion and crisp texture. Ideal for classic salted or flavored snacks.',
            benefits: ['Consistent expansion', 'Low oil absorption', 'Authentic potato taste'],
            applications: ['Fried snacks', '3D snacks', 'Seasoned chips']
        },
        {
            id: 'corn',
            name: 'Corn Micro Pellets',
            desc: 'Crunchy and flavorful corn pellets, perfect for creating bold, savory snacks popular in international markets.',
            benefits: ['Crunchy texture', 'Golden color', 'Versatile flavoring base'],
            applications: ['Tortilla style chips', 'Puffed snacks', 'Cheese balls']
        },
        {
            id: 'rice',
            name: 'Rice Micro Pellets',
            desc: 'Light and airy rice pellets that cater to health-conscious consumers. Gluten-free options available.',
            benefits: ['Light texture', 'Easy digestibility', 'Neutral base for seasoning'],
            applications: ['Healthy snacks', 'Asian style crackers', 'Diet snacks']
        },
        {
            id: 'lentil',
            name: 'Lentil Micro Pellets',
            desc: 'Protein-rich lentil pellets for the growing "better-for-you" snack segment.',
            benefits: ['High protein', 'Fiber rich', 'Unique savory profile'],
            applications: ['Protein chips', 'Healthy alternatives', 'Kids snacks']
        },
        {
            id: 'millet',
            name: 'Millet Micro Pellets',
            desc: 'Ancient grain power packed into convenient snack pellets. Capitalize on the global millet trend.',
            benefits: ['Superfood ingredients', 'Nutrient dense', 'Sustainable crop'],
            applications: ['Premium health snacks', 'Ancient grain chips']
        },
        {
            id: 'chickpea',
            name: 'Chickpea Micro Pellets',
            desc: 'Savory chickpea based pellets, offering a nutty flavor and high nutritional value.',
            benefits: ['Plant-based protein', 'Distinctive taste', 'Global appeal'],
            applications: ['Hummus chips', 'Mediterranean snacks']
        },
        {
            id: 'soya',
            name: 'Soya Micro Pellets',
            desc: 'Cost-effective and protein-fortified soya pellets for mass market applications.',
            benefits: ['Economical', 'Protein fortified', 'Good expansion'],
            applications: ['Mass market snacks', 'School feeding programs']
        },
        {
            id: 'multigrain',
            name: 'Multigrain Micro Pellets',
            desc: 'A balanced blend of grains for a complex texture and nutritional profile.',
            benefits: ['Complex carbohydrates', 'Rich texture', 'Premium positioning'],
            applications: ['Gourmet snacks', 'Wholesome chips']
        }
    ];

    return (
        <div className="page-products">
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
                        [Products Banner: Assorted Micro Pellets]
                    </span>
                </div>
                <h1 style={{ position: 'relative', zIndex: 1 }}>Our Micro Pellet Range</h1>
            </div>

            <section className="section">
                <div className="container">
                    <p className="text-center text-xl" style={{ maxWidth: '800px', margin: '0 auto 4rem', color: '#666' }}>
                        Explore our diverse range of fry-ready micro pellets, engineered for perfect expansion and superior taste.
                        <br />
                        <span className="text-accent" style={{ fontWeight: 'bold', fontSize: '0.9em', marginTop: '1rem', display: 'block' }}>
                            Bulk Export | Private Label | International Standards
                        </span>
                    </p>

                    <div className="product-list" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {productList.map((product, index) => (
                            <div key={product.id} id={product.id} style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
                                gap: '3rem',
                                alignItems: 'center',
                                backgroundColor: '#f9f9f9',
                                padding: '2rem',
                                borderRadius: '12px'
                            }} className="product-item">

                                {/* Image Side */}
                                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                    <div style={{
                                        height: '300px',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        border: '1px solid #eee',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#888',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                                    }}>
                                        [Image: {product.name}]
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{product.name}</h2>
                                    <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{product.desc}</p>

                                    <div className="grid grid-2" style={{ gap: '1rem' }}>
                                        <div>
                                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Key Benefits</h4>
                                            <ul style={{ listStyle: 'none' }}>
                                                {product.benefits.map((item, i) => (
                                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', fontSize: '0.95rem' }}>
                                                        <CheckCircle size={16} className="text-accent" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Applications</h4>
                                            <ul style={{ listStyle: 'none' }}>
                                                {product.applications.map((item, i) => (
                                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', fontSize: '0.95rem' }}>
                                                        <Package size={16} className="text-accent" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
