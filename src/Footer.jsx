import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <hr />
            <h3>This is the Footer</h3>
            <p>&copy; 2023 My Application. All rights reserved.</p>
            <p>Follow us on social media!</p>
            <ul className="social-media">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;