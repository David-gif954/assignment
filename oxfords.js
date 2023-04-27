import Link from "next/link"
import products from '../data/products';
import { ArrowDownTrayIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";

export default function Oxfords() {
    const handleDownload = () => {
        // const anchor = document.createElement("a");
        // anchor.href = "/images/loafer_01.jpg";
        // anchor.download = "loafer_01.jpg";
        // anchor.click();
        alert('Downloaded')
    };
    // filter it to only include products with a collection property of "oxfords". 
    const oxfords = products.filter(product => product.collection === 'oxfords');
    return (
        <>
           <div className="mb-8">
            <div className="flex justify-between lg:justify-normal items-center">
              <Link href={'/oxfords'} className='text-lg flex items-center lg:mr-24 font-semibold text-slate-900'>
                <span>Oxfords</span> 
                <div className="w-5 h-5 ml-3">
                  <ArrowLongRightIcon />
                </div>
              </Link>
              <p className="text-sm">Price: GHC 250 - GHC 500</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {oxfords.map(product => (
                <div className="border relative">
                  <Link href={`/products/${product.id}`}>
                      <img 
                        src={product.image}
                        alt={product.name}
                      />
                  </Link>
                  <button onClick={handleDownload} className="">
                    <ArrowDownTrayIcon className="absolute bottom-0 left-0 w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
            <h3>Other categories</h3>
            <Link href={'/boots'} className='text-lg px-6 font-semibold text-slate-900'>boots</Link>
            <Link href={'/loafers'} className='text-lg px-6 font-semibold text-slate-900'>Loafers</Link>
        </>
    )
}