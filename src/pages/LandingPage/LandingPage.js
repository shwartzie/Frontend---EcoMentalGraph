import React from 'react';
import { Aside } from '../../components/GlobalCmps/Aside.js';
import { Footer } from '../../components/GlobalCmps/Footer.js';
import { Header } from '../../components/GlobalCmps/Header.js';
import { Layout } from '../../components/LandingPageCmps/Layout.js';

export const LandingPage = () => {
    return (
        <>
            <main className="main-landing-page">
                <div className="main-landing-page-container">
                    <Aside />
                    <Layout />
                    {/* <Footer /> */}
                </div>
            </main>
        </>
    );
}

