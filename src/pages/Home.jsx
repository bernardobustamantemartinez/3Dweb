import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

import state from '../store';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <div>Home</div>
  )
}

export default Home