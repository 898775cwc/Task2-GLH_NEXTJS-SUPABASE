/* Products page that showcases the amount of stock there is for each categor of goods */
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function Products() {
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
              <a href="/pages/checkout"><FaShoppingBasket className="text-2xl mr-2" /></a>
              <a href="/pages/register"><CgProfile className="text-2xl mr-2" /></a>
              <a href="/pages/search"><FaSearch className="text-xl" /></a>
            </div>

        </div>

      </div>

      < /* MAIN BODY */ div className="flex flex-col items-center">

        < /* IMAGEBG */ div className="flex items-center justify-end bg-[url('https://www.shutterstock.com/image-photo/hen-eggs-chicken-coop-group-600w-2189634627.jpg')] w-200 h-80 mt-5 bg-cover bg-center">
          < /* SMALLER WHITE */ div className="bg-white w-100 h-55 border border-r-0 p-5">
            <h1 className="text-3xl">Our Products</h1>
            <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. </p>
          </div>
        </div>

        <div className="bg-customFore w-screen mt-10">
          < /* PRODUCTS */ div className="flex flex-col items-center mt-5">

            <h1 className="text-3xl mb-5">Products</h1>

            <div className="flex">

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/butter-shortbread-cookies-form-heart-600w-2550807565.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Artisan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/different-kinds-bread-nutrition-whole-600w-2322518775.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Bakery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/beekeeper-working-collect-honey-beekeeping-600w-1054817495.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Beekeeper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black ">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/raw-beef-meat-freshly-brought-600w-2549153903.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Butcher&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

              <div>
                <img src="https://www.shutterstock.com/image-photo/assortment-fresh-dairy-products-bottle-600w-2486616517.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Dairy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

            </div>

            <div className="flex mt-5">

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/cold-cuts-deli-meats-appetizer-600w-2458845391.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Deli&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/blackberries-red-raspberries-cartons-on-600w-2532388309.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Fruits&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/collection-fresh-delicious-vegetables-600w-1191293119.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Vegetable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black ">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/still-life-fresh-fish-market-600w-1590341314.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Fish&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

              <div>
                <img src="https://www.shutterstock.com/image-photo/small-beautiful-bouquet-mixed-flowers-600w-2380533803.jpg" alt="" className="w-35 h-35 object-cover" />
                <div className="flex mt-1">
                  <h1>Flowers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black">00</p>
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-col items-center mt-10 mb-5">
          <h1 className="text-3xl">How we manage</h1>
          <p className="w-180 text-center">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute</p>
        </div>
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
