import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const Home = () => {
    const recentPosts = [
        { id: 1, title: 'How to integrate social login?', content: 'I need help with adding social login to my app.' },
        { id: 2, title: 'Best practices for API calls', content: 'What are the best practices for making API calls in React?' },
        // Add more posts as needed
    ];

    return (
        <div>
            <Header />
            <h1>Welcome to the Forum</h1>
            <h2>Recent Queries</h2>
            <div>
                {recentPosts.map(post => (
                    <Post key={post.id} title={post.title} content={post.content} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;