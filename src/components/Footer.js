import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Forum Website. All rights reserved.</p>
                <p>
                    <a href="/tutorial">Tutorials</a> | <a href="/contact">Contact Us</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;