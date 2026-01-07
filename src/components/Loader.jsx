import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
    const [text, setText] = useState('CONNECTING...');
    const [glitch, setGlitch] = useState(false);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            // Step 1: Connecting
            setGlitch(true);
            await new Promise(r => setTimeout(r, 600));

            // Step 2: Identity Verified
            setText('IDENTITY VERIFIED: VIJAY SHARMA');
            setGlitch(true);
            await new Promise(r => setTimeout(r, 800));

            // Step 3: System Ready
            setText('SYSTEM READY');
            setGlitch(true);
            await new Promise(r => setTimeout(r, 600));

            // Exit
            setExit(true);
            await new Promise(r => setTimeout(r, 400));
            onLoadingComplete();
        };

        sequence();
    }, [onLoadingComplete]);

    if (exit) return null;

    return (
        <div className={`loader-container ${exit ? 'slide-out' : ''}`}>
            <div className="loader-scanline"></div>
            <div className="loader-content">
                <div className={`loader-text ${glitch ? 'glitch-active' : ''}`} data-text={text}>
                    {text}
                </div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
