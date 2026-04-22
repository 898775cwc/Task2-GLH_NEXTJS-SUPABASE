import Image from "next/image";

import { IoPricetagOutline } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

export default function Checkout() {
  return (
    < /*D.PARENT*/ div className="h-screen flex flex-col justify-items-center items-center">

      < /*HEADER*/ div className="w-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium p-3">Greenfield Local Hub checkout</h1>
        <hr className="w-screen" />
      </div>

      < /*BODY*/ div className="flex">
   
      < /*LEFT SECTION*/ div className="w-full flex flex-col items-center border-r h-screen pr-10 overflow-scroll overflow-x-hidden pl-10">

        < /*EX.PAYMENT*/ div className="border p-5 pt-3 w-66 rounded-lg flex flex-col items-center mt-10">

          <h1 className="text-xs">Express Checkout</h1>

          < /*BLACK*/ div className="bg-neutral-950 h-7 w-55 rounded-lg flex items-center justify-center">
            <img src="https://vectorseek.com/wp-content/uploads/2023/10/Apple-Pay-white-Logo-Vector.svg--300x300.png" alt="" className="h-7" />
          </div>
          < /*wHITE*/ div className="mt-1 border h-7 w-55 rounded-lg flex items-center justify-center">
            <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-pay-payment-software-vector-png-image_9183298.png" alt="" className="h-4" />
          </div>

        </div>

        < /*ORDER DETAILS*/ div className="flex flex-col mt-10">
              
          <h1 className="text-xl">Customer Details</h1>
          <div>
            <input type="text" id="firstname" placeholder="First Name" className="border border-solid border-black mb-2 mr-1 w-50 rounded-sm" />
            <input type="text" id="surname" placeholder="Surname" className="border border-solid border-black mb-2 w-50 rounded-sm" />
          </div>

          <input type="email" id="email" placeholder="Email" className="border border-solid border-black mb-2 w-101 rounded-sm" />

          <h1 className="text-xl">Address</h1>
          <input type="text" id="country" placeholder="Country" className="border border-solid border-black mb-2 w-101 rounded-sm" />

          <div>
            <input type="text" id="add1" placeholder="Address Line 1" className="border border-solid border-black mb-2 mr-1 w-50 rounded-sm" />
            <input type="text" id="add2" placeholder="Address Line 2" className="border border-solid border-black mb-2 w-50 rounded-sm" />
          </div>

          <div>
            <input type="text" id="city" placeholder="City" className="border border-solid border-black mb-2 mr-1 w-50 rounded-sm" />
            <input type="text" id="postcode" placeholder="Postcode" className="border border-solid border-black mb-2 w-50 rounded-sm" />
          </div>

        </div>

        <hr className="mt-10 w-full" />

        < /*PAYMENT*/ div className="mt-10 flex flex-col items-center">

        <div className="w-80">
          <h1 className="text-xl">Payment</h1>
        </div>

          < /*RADIO SELECTION*/ div className="border w-80 h-20 rounded-lg">

            < /*UP*/ div className="w-full h-1/2 border-b flex items-center pl-4">
              
            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2" />
            <label>Credit/Debit Card</label>  

            </div>
            < /*DOWN*/ div className="w-full h-1/2 flex items-center pl-4">
              
            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-2" />
            <label htmlFor="">Apple Pay</label>

            </div>

          </div>

          < /*DEBIT/CREDIT CARDS*/ div className="mt-10 bg-gray-200 w-101 p-5 rounded-md">
            <h1>Credit/Debit Card</h1>
            <input type="text" id="enternumber" placeholder="Enter Number" className="border border-solid bg-white mb-2 w-91 rounded-sm" />

            <div className="flex">
              <input type="text" id="expiration" placeholder="MM/YY" className="border border-solid bg-white mb-2 mr-1 w-45 rounded-sm" />
              <input type="text" id="cvv" placeholder="3-4 digits" className="border border-solid bg-white mb-2 w-45 rounded-sm" />
            </div>

            <input type="text" id="cardholder" placeholder="Enter Full Name" className="border border-solid bg-white mb-2 w-91 rounded-sm" />
          </div>

          
          < /*BILLING*/ div className="mt-5 w-101">
            <h1 className="text-lg">Billing Address</h1>
            <input type="checkbox" />
            <label>&emsp;Same as Address</label>
          </div>
          
          </div>

          <hr className="mt-10 w-full" />

          < /*BILLING*/ div className="mt-5 w-101">
            <h1 className="text-lg">Billing Address</h1>
            <p className="text-xs">Review your details above and continue when you're ready.</p>
            <input type="checkbox" />
            <label>&emsp;By proceeding with your purchase you agree to<br /> our Terms and Conditions and Privacy Policy.</label>
            <button className="bg-winery text-white px-4 py-2 w-60 mt-5 mb-10 rounded-sm hover:bg-customFore">Place Order & Pay</button>
          </div>

      </div>

      < /*RIGHT SECTION*/ div className="w-full flex flex-col items-center pl-10">
      <div className="mt-10">

        <h1 className="text-xl">Order Summary</h1>
        <div className="flex mt-2">
          <img src="https://i.pinimg.com/736x/52/1a/62/521a621ac90af45ee8b36739434952fa.jpg" alt="" className="w-20 border rounded-sm p-2 mr-2" />
          <div>
            <h1 className="mr-10">Milk</h1>
            <p>Quantity: 0</p>
          </div>
          <p>£9.99</p>
        </div>


        < /*PROMO*/ div className="border p-5 mt-10 rounded-lg w-80">

          <div className="flex items-center">
            <IoPricetagOutline className="mr-3" />
            <h1>Enter Promo Code</h1>
          </div>

          <div className="flex">
            <input type="text" id="name" placeholder="e.g. PROMO123" className="border border-solid bg-white w-50 h-10 rounded-sm mr-2" />
            <button className="bg-winery text-white px-4 py-2 w-20 rounded-sm hover:bg-customFore">Apply</button>
          </div>

        </div>

        <div className="mt-5 flex justify-between">
          <div>
            <h1>Subtotal</h1>
            <h1>Delivery</h1>
            <h1>VAT</h1>
            <h1 className="mt-2 text-xl ">Total</h1>
          </div>
          <div>
            <p>£0.00</p>
            <p>£0.00</p>
            <p>£0.00</p>
            <p className="mt-2 text-xl">£0.00</p>
          </div>
        </div>

      </div>
        
      </div>

      </div>

      <hr className="w-screen" />

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
