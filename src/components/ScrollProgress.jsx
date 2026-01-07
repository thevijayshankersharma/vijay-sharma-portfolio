import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    // Create a smooth spring animation for the scale
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="progress-bar"
            style={{
                scaleX,
                transformOrigin: "left"
            }}
        />
    );
};

export default ScrollProgress;
