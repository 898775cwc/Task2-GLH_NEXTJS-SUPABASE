import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";

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

        <div className="flex mt-5">
          < /*LEFT SECTION GREY*/ div className="bg-gray-100 rounded-xl p-5">
            < /*CONTENT*/ div className="flex flex-col">
              <p className="text-2xl mt-2 mb-3">Settings: Placeholder</p>
              <a href="/pages/admin/editprofile" className="text-xl">Primary Details</a>
              <a href="/pages/admin/editprofile/address" className="text-xl">Address</a>
              <a href="/pages/admin/editprofile/contact" className="text-xl">Contact</a>
              <a href="/pages/admin/editprofile/social" className="text-xl">Social</a>
              <a href="/pages/admin/editprofile/business" className="text-xl">Business Details</a>
              <a href="/pages/admin/editprofile/images" className="text-xl">Images</a>
              <a href="/pages/admin/editprofile/users" className="text-xl">Users</a>
            </div>
          </div>

          < /* RIGHT SECTION*/ div className="ml-10 flex flex-col w-100">
            <h1 className="text-3xl">Primary Details</h1>

            <div className="flex items-center justify-between mt-5">

              <div>
                <h1 className="mb-2">Name:</h1>
                <h1>Primary Producer?:</h1>
              </div>
              <div>
                <input type="text" id="firstName" placeholder="e.g. Clark Kent's Farm" className="border border-solid border-black mb-2 w-50 rounded-sm" />
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label>&emsp;Producer</label>
                </div>
                
              </div>

            </div>

            <div className="mt-5 justify-end flex">
              <button className="bg-winery text-white mr-2 rounded-sm hover:bg-customFore text-sm p-1">Edit</button>
              <a href="/pages/admin">
                <button className="bg-winery text-white rounded-sm hover:bg-customFore text-sm p-1">Close</button>
              </a>
            </div>

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
