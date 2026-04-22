/* This is the about (GLH) page that provides information about my client */
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function About() {
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

      < /*BODY*/ div>
        <div className="flex flex-col items-center mt-5">
          <h1 className="text-3xl">We are GLH</h1>
          <p className="w-180 text-center">Greenfield Local Hub has been established many years ago with a mission to help the local population. It is our dream to create a platform where producers and consumers have the ability to connect with ease.</p>
        </div>
        <div className="bg-[url('https://www.shutterstock.com/image-photo/cashew-apples-fruits-water-droplets-600w-2678292685.jpg')] w-200 h-80 mt-10 mb-10 bg-cover bg-center"></div>

        <div className="flex items-center">
          <img src="https://www.shutterstock.com/image-photo/highland-calf-looking-straight-into-600w-1580847085.jpg" alt="" className="w-90 h-90 mr-5 object-cover" />
          <div>
            <h1 className="text-3xl">We are Sustainable</h1>
            <p className="w-100">Along with working with the agricultural community, we do it sustainably. Global warming and climate change is a problem that will only continue to worsen if we don't take action. That is why we, Greenfield Local Hub, our devices and applications are set to optimised and we encourage our farmers to adopt eco-friendly practices such as recyclable packaging and delivery options with low carbon emissions. We recognise that without these practices, our planet won't be able to provide rich minerals and soils that then give the produce. We encourage those around us to embrace these eco-friendly practices. This is our home.</p>
          </div>
        </div>

        <div className="flex items-center mt-10">
          <div>
            <h1 className="text-3xl">We care</h1>
            <p className="w-100">Communication is key, and we believe in building strong relationships with our community. In Greenfield Local Hub, nobody is left behind. GLH is available for enquiries at any time. We also provide mental health support for our employees and producers in times of need. We recognise it is important to listen to our community and address their concerns. A healthy workplace fosters productivity and well-being, including producing better quality produce for our customers.</p>
          </div>
          <img src="https://www.shutterstock.com/image-photo/two-african-american-farm-workers-600w-2196193717.jpg" alt="" className="w-90 h-90 ml-5 object-cover" />
        </div>

        <div className="flex flex-col items-center">
          <p className="w-180 text-center mt-10">Greenfield Local Hub is not just a name; it's a commitment and a fulfillment of our values. We will continue to carry out necessary support for producers and provide a centralised platform.</p>
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
