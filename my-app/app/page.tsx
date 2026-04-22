/* This is the home page */

import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function Home() {
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
              <a href="pages/about" className="hover:font-bold hover:text-winery
              ">About us</a>&emsp;
              <a href="pages/localfarmers" className="hover:font-bold hover:text-winery
              ">Local Farmers</a>&emsp;
              <a href="pages/products" className="hover:font-bold hover:text-winery
              ">Products</a>&emsp;
              <a href="pages/contactus" className="hover:font-bold hover:text-winery
              ">Contact us</a></p>
            </div>

            </div>
            
          
            < /*ICONS*/ div className="flex items-center ml-25">
              < /*would need its own popup*/ FaShoppingBasket className="text-2xl mr-2" />
              <a href="pages/register"><CgProfile className="text-2xl mr-2" /></a>
              <a href="/pages/search"><FaSearch className="text-xl" /></a>
            </div>

        </div>

      </div>

      < /*BODY*/ div>

        < /*Body's first vertical section*/ div className="flex flex-col items-center mt-5 mb-20">

          <img src="https://www.shutterstock.com/image-photo/old-farm-house-stone-bridge-600w-2677259029.jpg" alt="Farm Image" className="h-100" />

        <div>
          <h1 className="text-3xl mt-3">This is GLH</h1>
        <p className="w-150 mb-2">At Greenfield Local Hub, we provide a platform for local farmers to showcase their products and connect with consumers. With high quality standards and a commitment to sustainability, we strive to support our local agricultural community. We create a safe space for both producers and consumers.</p>
        <a href="/pages/about">
          <button className="bg-winery text-white rounded p-2 pl-4 pr-4 hover:bg-customFore">More about us</button>
        </a>

        </div>
        
        </div>

        < /*Body's second vertical section*/ div>

          < /*First box/subsection (Register as a farmer)*/ div className="border flex p-5 rounded-lg bg-customFore">

            <img src="https://www.shutterstock.com/image-photo/farmer-woman-holding-wood-box-600w-2006053310.jpg" alt="Farm Gate" className="border h-50 mr-3" />

            <div>
              <h1 className="text-3xl">Register as a Producer</h1>
              <p className="w-100">As producers, it is important to find a sustainable platform to showcase your products and obtain ways to sell them. If you register to Greenfield Local Hub as a producer, you can easily achieve this using our online marketplace.</p>
              <a href="/pages/farmregister">
                <button className="bg-winery text-white rounded p-2 pl-4 pr-4 hover:bg-customFore mt-1">Register</button>
              </a>
            </div>
            
          </div>

          < /*Second box/subsection (Learn more about local farmers)*/ div className="mt-6 border flex p-5 rounded-lg bg-customFore">

            <div className="text-right">
              <h1 className="text-3xl">Our Farms</h1>
              <p className="w-100">Farms registered with Greenfield Local Hub range nationwide, offering rich variety of fresh produce. Learn more about our network of local farms and indulge in British greatness in the form of locally sourced goods.</p>
              <a href="/pages/localfarmers">
                <button className="bg-winery text-white rounded p-2 pl-4 pr-4 hover:bg-customFore mt-1">More about Producers</button>
              </a>
            </div>

            <img src="https://www.shutterstock.com/image-photo/agronomists-using-digital-tablet-farm-600w-2731273231.jpg" alt="Farm Gate" className="border h-50 ml-3" />
            
          </div>

          < /*Contents about the produce*/ div className="mt-15 flex p-5">

            <div className="flex items-center">
              <div className="text-right">
              <h1 className="text-5xl">Products</h1>
              <p className="w-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolore nisi pariatur sapiente vitae, illum distinctio perferendis autem non voluptatem inventore numquam nemo officia molestias excepturi, impedit, minus ullam maiores.</p>
              <a href="/pages/products">
                <button className="bg-winery text-white rounded p-2 pl-4 pr-4 hover:bg-customFore">Shop for Products</button>
              </a>
            </div>

            <img src="https://www.shutterstock.com/image-photo/cropped-photo-gardener-wearing-checked-600w-1810450975.jpg" alt="Farm Gate" className="h-70 w-70 ml-3 rounded-full border object-cover" />
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
