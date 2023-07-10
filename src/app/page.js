import Navbar from './components/Navbar';
import ProductsSection from './components/ProductsSection';
import Image from 'next/image';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full">
         <Image src="/background1.png" alt="background1" layout="responsive" width={1920} height={1080} />
      </div>

      <ProductsSection/>
      {/* Add the rest of your page content here */}
    </div>
  );
};

export default HomePage;
