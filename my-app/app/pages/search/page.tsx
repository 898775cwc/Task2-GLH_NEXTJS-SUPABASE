/* This is the search page */
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function Search() {
  return (
    < /*Parent div that contains all the content below. Made to fill the website.*/ div className="h-screen flex flex-col justify-items-center items-center">

      < /*Marquee div showing that a sale is going on*/ div className="bg-customFore w-screen h-6 border border-solid border-black overflow-hidden pb-6">
        <Marquee className="mask-l-from-60% mask-r-from-60%" pauseOnHover>
          <p>Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off</p>
        </Marquee>
      </div>

      < /*Header div*/ div className="w-screen flex flex-col items-center mt-5 mb-5">

        < /*Navbar div that contains the logo, navigation links and specific icons*/ div className="flex items-center">

            <a href="/">
              <img src="https://i.ibb.co/B2qj72Zs/GLHLogo.png" alt="Greenfield Local Hub Logo" className="h-15 mr-20" />
            </a>

            < /*Div to contain the title, links and icons*/ div>

              < /*TITLE*/ h1 className="flex flex-col items-center text-3xl mb-1">Greenfield Local Hub</h1>

            < /*LINKS*/ div>
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
            
          
            < /*ICONS*/ div className="flex items-center ml-25">
              <a href="/pages/checkout"><FaShoppingBasket className="text-2xl mr-2" /></a>
              <a href="/pages/register"><CgProfile className="text-2xl mr-2" /></a>
              <a href="/pages/search"><FaSearch className="text-xl" /></a>
            </div>

        </div>

      </div>

      < /*BODY*/ div className="flex flex-col items-center mt-5">
        <h1 className="text-3xl">Search</h1>
        < /*Search bar*/ div className="mt-2">
          <input type="text" placeholder="Search..." className="border border-solid border-black w-150 h-10 rounded-l-sm" />
          <button className="bg-winery text-white px-4 py-2 w-35 rounded-r-lg hover:bg-customFore">Search</button>
        </div>

        < /*Further suggestions for the customer going through GLH as quick access*/ div className="mt-5">
          <h1 className="text-xl font-bold">You might be interested in...</h1>

          < /*Section of three suggestions (Artisan, bakery and beekeeper). All can be seen in Products page.*/ div className="flex">
            <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/butter-shortbread-cookies-form-heart-600w-2550807565.jpg" alt="" className="w-35 h-35 object-cover rounded-lg" />
                <div className="flex mt-1">
                  <h1>Artisan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black ">00</p>
                </div>
              </div>

              <div className="mr-5">
                <img src="https://www.shutterstock.com/image-photo/different-kinds-bread-nutrition-whole-600w-2322518775.jpg" alt="" className="w-35 h-35 object-cover rounded-lg" />
                <div className="flex mt-1">
                  <h1>Bakery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black ">00</p>
                </div>
              </div>

              <div>
                <img src="https://www.shutterstock.com/image-photo/beekeeper-working-collect-honey-beekeeping-600w-1054817495.jpg" alt="" className="w-35 h-35 object-cover rounded-lg" />
                <div className="flex mt-1">
                  <h1>Beekeeper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  <p className="bg-winery text-white pl-2 pr-2 rounded-lg border border-black ">00</p>
                </div>
              </div>
          </div>
          
        </div>
        
      </div>

      < /*Footer div/site map*/ div className="flex flex-col mt-50">

        <div className="flex">

          < /*Logo and address*/ div className="mr-80">
            <img src="https://i.ibb.co/B2qj72Zs/GLHLogo.png" alt="Greenfield Local Hub Logo" className="h-15 mb-2" />
            <p className="font-bold text-sm">Address:<br></br></p>
            <p className="text-xs mb-2">123 Main Street, City<br></br>Scotland, United Kingdom</p>
            < /*Social media icons*/ div className="flex">
              <FaInstagram className="mr-2" />
              <RiTwitterXFill className="mr-2" />
              <FaFacebook />
            </div>       
          </div>

          < /*Sitemap links*/ div>
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
        
        < /*Footer rights*/ div className="text-xs flex flex-col items-center">

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
