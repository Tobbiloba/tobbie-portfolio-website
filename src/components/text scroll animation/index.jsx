// import React, {useRef} from 'react';
// import { gsap } from 'gsap';
// import styles from './style.module.scss';
// import { useLayoutEffect } from 'react';
// const TextScrollAnimation = () => {

//     const firstText = useRef(null);
//     const secondText = useRef(null);


//     useLayoutEffect( () => {
//         gsap.registerPlugin(ScrollTrigger);
//         gsap.to(slider.current, {
//           scrollTrigger: {
//             trigger: document.documentElement,
//             scrub: 0.25,
//             start: 0,
//             end: window.innerHeight,
//             onUpdate: e => direction = e.direction * -1
//           },
//           x: "-500px",
//         })
//         requestAnimationFrame(animate);
//       }, [])

//     const animate = () => {
//         if(xPercent < -100){
//           xPercent = 0;
//         }
//         else if(xPercent > 0){
//           xPercent = -100;
//         }
//         gsap.set(firstText.current, {xPercent: xPercent})
//         gsap.set(secondText.current, {xPercent: xPercent})
//         requestAnimationFrame(animate);
//         xPercent += 0.1 * direction;
//       }

//   return (
//     <div className={styles.sliderContainer}>
//         <div ref={slider} className={styles.slider}>
//           <p ref={firstText}>Freelance Developer -</p>
//           <p ref={secondText}>Freelance Developer -</p>
//         </div>
//       </div>
//   );
// }

// export default TextScrollAnimation;


import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import styles from './style.module.scss';

const TextScrollAnimation = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null); // Added missing slider ref

    const xPercent = 0; // Define xPercent
    let direction = 1; // Define direction

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: '-500px',
        });
        requestAnimationFrame(animate);
    }, []);

    return (
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={firstText} className='text-extraliht text-[100px] lg:text-[300px]'>Frontend Developer -</p>
                {/* <p ref={secondText}>Mobile Developer -</p> */}
            </div>
        </div>
    );
};

export default TextScrollAnimation;
