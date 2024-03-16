// components/Layout.js
'use client'
import { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;