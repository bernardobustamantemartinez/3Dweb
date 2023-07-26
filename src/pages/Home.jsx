import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

import state from '../store';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
      <motion.section className='home' {...slideAnimation('left')}>

        <motion.header {...slideAnimation('down')}>
          <img 
          src='./paleta.png' 
          alt='logo' 
          className='w-24 h-24 object contain' 
          />
        </motion.header>

        <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>Paleta <br className='x1:block hidden' /> Lab</h1>
          </motion.div>
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-gray-600 text-base'>
              Create your own unique t-shirt by uploading your logo to our 3D model. 
              <strong> Generate your own logo using AI</strong> and launch your brand.
            </p>

            <CustomButton 
              type='filled'
              title='Customize'
              handleClick={() => state.intro = false} 
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
        </motion.div> 

      </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home