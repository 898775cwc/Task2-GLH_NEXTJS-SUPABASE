import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function LocalFarmers() {
  return (
    < /*D.PARENT*/ div className="h-screen flex flex-col justify-items-center items-center">

      < /*D.MARQUEE*/ div className="bg-customFore w-screen h-6 border border-solid border-black overflow-hidden pb-6">
        <Marquee className="mask-l-from-60% mask-r-from-60%" pauseOnHover>
          <p>Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off</p>
        </Marquee>
      </div>

      < /*D.HEADER*/ div className="w-screen flex flex-col items-center mt-5 mb-5">

        < /*DH.NAVBAR*/ div className="flex items-center">

            <a href="/">
              <img src="https://i.ibb.co/B2qj72Zs/GLHLogo.png" alt="Greenfield Local Hub Logo" className="h-15 mr-20" />
            </a>

            < /* DHN.MIDDLE*/ div>

              <h1 className="flex flex-col items-center text-3xl mb-1">Greenfield Local Hub</h1>

            < /*DHN.LINKS*/ div>
              <hr className="mb-2" />
              <p><a href="/" className="hover:font-bold hover:text-winery
              ">Home</a>&emsp;
              <a href="/pages/about" className="hover:font-bold hover:text-winery
              ">About us</a>&emsp;
              <a href="/pages/localfarmers" className="hover:font-bold hover:text-winery
              ">Local Farmers</a>&emsp;
              <a href="/pages/products" className="hover:font-bold hover:text-winery
              ">Products</a>&emsp;
              <a href="/pages/contactus" className="hover:font-bold hover:text-winery
              ">Contact us</a></p>
            </div>

            </div>
            
          
            <div className="flex items-center ml-25">
              < /*would need its own popup*/ FaShoppingBasket className="text-2xl mr-2" />
              <a href="/pages/register"><CgProfile className="text-2xl mr-2" /></a>
              <a href="/pages/search"><FaSearch className="text-xl" /></a>
            </div>

        </div>

      </div>

      < /* MAIN BODY */ div className="flex flex-col items-center">

        < /* IMAGEBG */ div className="flex items-center justify-end bg-[url('https://www.shutterstock.com/image-photo/colombian-coffee-farmer-picking-berries-600w-2693367887.jpg')] w-200 h-80 mt-5">
          < /* SMALLER WHITE */ div className="bg-white w-100 h-55 border border-r-0 p-5">
            <h1 className="text-3xl">Local Farmers</h1>
            <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. </p>
          </div>
        </div>  

        <p className="w-200 mt-10">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute</p>
        
        < /* ONETWOTHREE */ div className="flex mt-10">

          <div className="flex flex-col items-center">
            <img src="https://www.shutterstock.com/image-photo/farmer-examining-growth-soybean-plant-600w-2656901491.jpg" alt="" className="w-70 h-70 object-cover mr-4" />
            <h1 className="text-3xl mt-1">Showcase</h1>
            <p>Content for the header section.</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="https://www.shutterstock.com/image-photo/happy-worker-businesswoman-shaking-hands-600w-2673069619.jpg" alt="" className="w-70 h-70 object-cover mr-4" />
            <h1 className="text-3xl mt-1">Connect</h1>
            <p>Content for the header section.</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="https://www.shutterstock.com/image-photo/african-woman-hands-holding-organic-600w-2664028603.jpg" alt="" className="w-70 h-70 object-cover" />
            <h1 className="text-3xl mt-1">Grow</h1>
            <p>Content for the header section.</p>
          </div>

        </div>

        <a href="/pages/farmregister" className="mt-5">
          <button className="bg-winery text-white px-4 py-2 w-35 mt-5 rounded-sm hover:bg-customFore">Register</button>
        </a>

        < /* COLOR */ div className="bg-customFore w-screen mt-10">
          <div className="pl-120 pr-120 pt-10 pb-10">
            <h1 className="text-3xl">Local Farmer</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae cumque nobis sint quaerat quod culpa velit consequuntur. Architecto, excepturi. Repellat odit sequi architecto, nisi molestias ducimus quaerat culpa obcaecati nam.</p>
          </div>
        </div>

        < /* PRODUCTS */ div className="flex flex-col items-center mt-10">

          <h1 className="text-3xl mb-5">Products</h1>

          <div className="flex">
            <img src="https://www.shutterstock.com/image-photo/butter-shortbread-cookies-form-heart-600w-2550807565.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/different-kinds-bread-nutrition-whole-600w-2322518775.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/beekeeper-working-collect-honey-beekeeping-600w-1054817495.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/raw-beef-meat-freshly-brought-600w-2549153903.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/assortment-fresh-dairy-products-bottle-600w-2486616517.jpg" alt="" className="w-35 h-35 object-cover" />
          </div>

          <div className="flex mt-5">
            <img src="https://www.shutterstock.com/image-photo/cold-cuts-deli-meats-appetizer-600w-2458845391.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/blackberries-red-raspberries-cartons-on-600w-2532388309.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/collection-fresh-delicious-vegetables-600w-1191293119.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/still-life-fresh-fish-market-600w-1590341314.jpg" alt="" className="w-35 h-35 object-cover mr-5" />
            <img src="https://www.shutterstock.com/image-photo/small-beautiful-bouquet-mixed-flowers-600w-2380533803.jpg" alt="" className="w-35 h-35 object-cover" />
          </div>

          <a href="/pages/products" className="mt-5">
              <button className="bg-winery text-white px-4 py-2 w-35 mt-5 rounded-sm hover:bg-customFore">More</button>
            </a>

        </div>

      </div>

      < /*FOOTER*/ div className="flex flex-col mt-50">

        < /*F.SECTIONS*/ div className="flex">

          < /*FS.SECTION01*/ div className="mr-80">

          <img src="https://i.ibb.co/B2qj72Zs/GLHLogo.png" alt="Greenfield Local Hub Logo" className="h-15 mb-2" />
          <p className="font-bold text-sm">Address:<br></br></p>
          <p className="text-xs mb-2">123 Main Street, City<br></br>Scotland, United Kingdom</p>
          <div className="flex">
            <FaInstagram className="mr-2" />
            <RiTwitterXFill className="mr-2" />
            <FaFacebook />
          </div>
          
          </div>

          < /*FS.SECTION02*/ div>
          <div className="flex">
            <p className="mr-18 text-lg">Information</p>
            <p className="mr-20 text-lg">Support</p>
            <p className="text-lg">Account</p>
          </div>

          <div className="flex">
          <p className="mr-9">
            <a href="/pages/about" className="hover:font-bold hover:text-winery text-xs">About GLH</a><br />
            <a href="/pages/farmregister" className="hover:font-bold hover:text-winery text-xs">Register as a Producter</a><br />
            <a href="/pages/privacy" className="hover:font-bold hover:text-winery text-xs">Privacy Policy</a><br />
            <a href="/pages/terms" className="hover:font-bold hover:text-winery text-xs">Terms & Conditions</a>
          </p>
          <p className="mr-10">
            <a href="/pages/contactus" className="hover:font-bold hover:text-winery text-xs">Contact Us</a><br />
            <a href="https://" className="hover:font-bold hover:text-winery text-xs">Help Center</a><br />
            <a href="https://" className="hover:font-bold hover:text-winery text-xs">Submit and Dispute</a><br />
            <a href="/pages/privacy" className="hover:font-bold hover:text-winery text-xs">Policies & Rules</a>
          </p>
          <p>
            <a href="/pages/myaccount" className="hover:font-bold hover:text-winery text-xs">My Account</a><br />
            <a href="/pages/myaccount" className="hover:font-bold hover:text-winery text-xs">Order History</a><br />
            <a href="/pages/myaccount" className="hover:font-bold hover:text-winery text-xs">Shopping Cart</a><br />
            <a href="/pages/myaccount" className="hover:font-bold hover:text-winery text-xs">Wishlist</a>
          </p>
          </div>
          
            
          </div>

        </div>
        
        < /*F.RIGHTS*/ div className="text-xs flex flex-col items-center">

          <p>© 2026 Greenfield Local Hub. All rights reserved.</p>
          <div className="flex">
            <p>
              <a href="/pages/privacy" className="hover:font-bold hover:text-winery">Privacy Policy</a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <a href="/pages/terms" className="hover:font-bold hover:text-winery">Terms of Service</a>
            </p>
          </div>
          
        </div>
        
      </div>

    </div>
  );
}
