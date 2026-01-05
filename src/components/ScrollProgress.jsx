import { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [width, setWidth] = useState(0);

    const scrollHeight = () => {
        const el = document.documentElement;
        const ScrollTop = el.scrollTop || document.body.scrollTop;
        const ScrollHeight = el.scrollHeight || document.body.scrollHeight;

        const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        setWidth(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeight);
        return () => window.removeEventListener('scroll', scrollHeight);
    }, []);

    return <div className="progress-bar" style={{ width: width + '%' }}></div>;
};

export default ScrollProgress;
