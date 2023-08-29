import {motion} from 'framer-motion'

const revealPage = (OgComponent) => {
    return () => (
        <div>
            <OgComponent />

            <motion.div 
                className='transform-bottom fixed top-0 w-scrreen h-screen left-0 bg-white'
                initial={{scaleY: 0}}
                animate={{scaleY: 0, duration: 2}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                ></motion.div>

<motion.div 
                className='transform-top top-0 left-0 bg-white w-screen h-screen'
                initial={{scaleY: 1}}
                animate={{scaleY: 1, duration: 1}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                ></motion.div>
        </div>
    )
}
export default revealPage