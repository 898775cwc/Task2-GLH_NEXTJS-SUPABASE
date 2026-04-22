import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function Transactions() {
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

      < /*BODY*/ div className="mt-5 flex items-center">

        < /*LEFT SECTION GREY*/ div className="bg-gray-100 rounded-xl p-5 pt-10 pb-10">
          < /*CONTENT*/ div className="flex flex-col items-center">
            <img src="https://i.pinimg.com/736x/13/ad/a1/13ada1a3dbb6c57f8fec1c386ea31546.jpg" alt="" className="w-40 h-40 rounded-full border" />
            <p className="text-2xl mt-5 mb-3">@PLACEHOLDER</p>
            <div className="flex flex-col">
              <a href="/pages/myaccount" className="text-xl">Edit Profile</a>
              <a href="/pages/myaccount/orders" className="text-xl">Orders</a>
              <a href="/pages/myaccount/shipbill" className="text-xl">Shipping & Billing</a>
              <a href="/pages/myaccount/pay" className="text-xl">Payment Methods</a>
              <a href="/pages/myaccount/loyaltycard" className="text-xl">GLH Card</a>
              <a href="/pages/myaccount/transactions" className="text-xl">Transactions</a>
              <a href="/" className="text-xl">Exit</a>
            </div>
          </div>
        </div>

        < /* RIGHT SECTION*/ div className="ml-10 flex flex-col w-100">
          <h1 className="text-3xl">Transaction History</h1>
          <p>No transactions made yet.</p>
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
