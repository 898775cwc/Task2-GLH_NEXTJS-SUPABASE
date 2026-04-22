/* Access to the admn panel once farmers are logged in or signed up */
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { MdPerson } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function Admin() {
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
                    <a href="/pages/admin" className="hover:font-bold hover:text-winery
                    ">Dashboard</a>&emsp;
                    <a href="/pages/admin/products" className="hover:font-bold hover:text-winery
                    ">Products</a>&emsp;
                    <a href="/pages/admin/reports" className="hover:font-bold hover:text-winery
                    ">Reports</a>&emsp;
                    <a href="/pages/admin/enterprises" className="hover:font-bold hover:text-winery
                    ">Enterprises</a></p>
                </div>

            </div>
            
          
            <div className="flex items-center ml-25">
              <a href="/pages/admin/editprofile"><CgProfile className="text-2xl mr-2" /></a>
              <a href="/"><RiLogoutBoxRLine className="text-2xl" /></a>
            </div>

        </div>

    </div>

      < /*BODY*/ div className="flex flex-col items-center">
        <hr className="w-screen border border-neutral-200" />

        <div className="w-1/2 mt-5 flex justify-between items-center">
          <h1 className="text-3xl">Admin Panel</h1>

          <button className="bg-winery text-white p-1 rounded-sm hover:bg-customFore text-xs flex"> <GoLinkExternal /> &nbsp; User Guide</button>
        </div>
        
        <div className="flex mt-5 w-1/2 justify-between">
          
          < /*EDITPROFILE*/ div className="border rounded-sm w-100 p-3">

            <h1 className="text-xl flex items-center">  <MdPerson className="mr-1" /> Edit Profile Details</h1>
            <p>Change your profile information at any time.</p>
            <a href="/pages/admin/editprofile">
              <button className="mt-1 bg-winery text-white px-4 py-2 w-full rounded-sm hover:bg-customFore flex items-center justify-center">  <FaArrowRight /> &nbsp; Edit Profile</button>
            </a>
          </div>

          < /*MANAGEPRODUCTS*/ div className="border rounded-sm w-100 p-3">
              
            <h1 className="text-xl flex items-center">  <FaCogs className="mr-2" /> Manage Products</h1>
            <p>Add and manage products for your store.</p>
            <a href="/pages/admin/products">
              <button className="mt-1 bg-winery text-white px-4 py-2 w-full rounded-sm hover:bg-customFore flex items-center justify-center">  <FaArrowRight /> &nbsp; Manage Products</button>
            </a>
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
