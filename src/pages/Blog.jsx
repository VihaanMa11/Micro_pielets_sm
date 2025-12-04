import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

import headerBg from '../assets/common_header_bg.png';
import './PageStyles.css';
import SEO from '../components/SEO';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Export', 'Snacks', 'Micro Pellets', 'Manufacturing', 'Food Trends'];

    const blogPosts = [
        {
            id: 1,
            title: "Top 5 Snack Trends in the Middle East for 2024",
            category: "Food Trends",
            date: "Oct 15, 2023",
            author: "Shareat Team",
            readTime: "5 min read",
            excerpt: "Discover the emerging flavor profiles and texture preferences driving the snack market in the Middle East region.",
            image: "Middle East Snacks"
        },
        {
            id: 2,
            title: "Why Micro Pellets are the Future of Scalable Snack Manufacturing",
            category: "Micro Pellets",
            date: "Sep 28, 2023",
            author: "R&D Head",
            readTime: "8 min read",
            excerpt: "Explore the efficiency, consistency, and versatility benefits of using micro pellets over traditional raw material processing.",
            image: "Pellet Manufacturing"
        },
        {
            id: 3,
            title: "Navigating Global Export Logistics: A Guide for Importers",
            category: "Export",
            date: "Sep 10, 2023",
            author: "Logistics Manager",
            readTime: "6 min read",
            excerpt: "Understanding Incoterms, container optimization, and documentation requirements for smooth international snack trade.",
            image: "Container Ship"
        },
        {
            id: 4,
            title: "The Rise of Healthy Snacking: Millet & Lentil Pellets",
            category: "Snacks",
            date: "Aug 22, 2023",
            author: "Nutritionist",
            readTime: "4 min read",
            excerpt: "How ancient grains are making a comeback in modern snack formats and appealing to health-conscious consumers.",
            image: "Healthy Grains"
        }
    ];

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="page-blog">
            <SEO
                title="Snack Micro Pellets Insights | Industry Trends & News"
                description="Stay updated with the latest trends in the Snack Micro Pellets industry, manufacturing technologies, and global export insights from Shareat Foods."
                keywords="Snack Micro Pellets Trends, Food Manufacturing Blog, Export Logistics, Micro Pellet Technology, Healthy Snacking Trends"
                url="/blog"
            />
            {/* Hero Banner */}
            <div className="page-banner" style={{
                backgroundImage: `url(${headerBg})`,
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="page-banner-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}></div>
                <h1 style={{ position: 'relative', zIndex: 1, color: 'black' }}>Industry Insights</h1>
            </div>

            <section className="section">
                <div className="container">
                    {/* Search & Filter */}
                    <div style={{ marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }}>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            border: activeCategory === cat ? 'none' : '1px solid #ddd',
                                            backgroundColor: activeCategory === cat ? 'var(--color-accent)' : 'white',
                                            color: activeCategory === cat ? 'white' : '#666',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div style={{ position: 'relative', minWidth: '250px' }}>
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px 10px 40px',
                                        borderRadius: '4px',
                                        border: '1px solid #ddd'
                                    }}
                                />
                                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-2">
                        {filteredPosts.map(post => (
                            <div key={post.id} style={{
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{
                                    height: '240px',
                                    backgroundColor: '#f0f0f0',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#888',
                                    borderBottom: '1px solid #eee'
                                }}>
                                    [Image: {post.image}]
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#888', marginBottom: '0.8rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', lineHeight: '1.3' }}>{post.title}</h3>
                                    <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>
                                            <User size={16} /> {post.author}
                                        </span>
                                        <button style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--color-accent)',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            cursor: 'pointer'
                                        }}>
                                            Read More <ArrowRight size={16} />
                                        </button>
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

export default Blog;
