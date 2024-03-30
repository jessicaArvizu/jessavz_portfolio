import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimateSection({ children, id }) {
    const ref = useRef(null);
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

    console.log(`Section ${id} is in view:`, inView);

    return (
        <section id={id} ref={ref}>
            <span
                ref={inViewRef}
                style={{
                    transform: inView ? 'none' : 'translateX(-200px)',
                    opacity: inView ? 1 : 0,
                    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    );
}

export default AnimateSection;
