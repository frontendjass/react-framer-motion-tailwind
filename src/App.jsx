import { motion } from 'framer-motion';
import Picture from './components/Picture';

function App() {
  return (
    <main className='bg-[#1e1e1e]'>
      <div className='grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
      </div>
    </main>
  );
}

export default App;
