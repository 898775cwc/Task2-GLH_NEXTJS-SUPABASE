import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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

      < /*BODY*/ div className="flex flex-col items-center h-screen">
        <hr className="w-screen border border-neutral-200" />

        <div className="w-1/2 mt-5 flex justify-between items-center">
                  <h1 className="text-3xl">Enterprises</h1>
        
                  <button className="bg-winery text-white p-1 rounded-sm hover:bg-customFore text-xs flex"> <FaPlus /> &nbsp; New Enterprise</button>
                </div>
        
        <div>

            <table className="w-180 border border-solid mt-5 table-fixed">
                <thead>
                    <tr className="border-b bg-gray-200">
                        <th>Name</th>
                        <th>Producer?</th>
                        <th>Package</th>
                        <th>Status</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td className="text-center">Placeholder</td>
                      <td className="pl-9">
                        <button className="flex flex-col items-center">Producer <IoIosArrowDown /> </button>
                      </td>
                      <td className="pl-12">
                        <button className="flex flex-col items-center">Profile <IoIosArrowDown /> </button>
                      </td>
                      <td className="pl-10">
                        <button className="flex flex-col items-center">Producer <IoIosArrowDown /> </button>
                      </td>
                      <td className="flex flex-col items-center">
                        <a href="/pages/admin/editprofile">
                          <button className="bg-winery text-white p-1 rounded-sm hover:bg-customFore text-xs">Settings</button>
                        </a>
                        
                      </td>
                    </tr>
                </tbody>
            </table>

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
