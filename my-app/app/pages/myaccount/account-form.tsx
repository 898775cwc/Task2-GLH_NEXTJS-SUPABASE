/* Account page for the customer to manage any information and keep track of order/shipping details */
'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import Marquee from "react-fast-marquee";

type Claims = { sub: string; email?: string; [key: string]: unknown }

export default function AccountForm({ claims }: { claims: Claims | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      if (!claims?.sub) {
        setLoading(false)
        return
      }

      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', claims.sub)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [claims, supabase])

  useEffect(() => {
    getProfile()
  }, [claims, getProfile])

  async function updateProfile({
    username,
    website,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
  }) {
    try {
      if (!claims?.sub) {
        alert('You must be logged in to update your profile')
        return
      }

      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: claims.sub,
        full_name: fullname,
        username,
        website,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    < /*Body div*/ div className="h-screen flex flex-col justify-items-center items-center">

            < /*Marquee div*/ div className="bg-customFore w-screen h-6 border border-solid border-black overflow-hidden pb-6">
        <Marquee className="mask-l-from-60% mask-r-from-60%" pauseOnHover>
          <p>Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off&emsp;Save 20% off</p>
        </Marquee>
      </div>

      < /*Header div*/ div className="w-screen flex flex-col items-center mt-5 mb-5">

        < /*Navbar div*/ div className="flex items-center">

            <a href="/">
              <img src="https://i.ibb.co/B2qj72Zs/GLHLogo.png" alt="Greenfield Local Hub Logo" className="h-15 mr-20" />
            </a>

            < /*Contains elements of the navbar*/ div>

              <h1 className="flex flex-col items-center text-3xl mb-1">Greenfield Local Hub</h1>

            < /*Navbar links*/ div>
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
              <form action="/auth/signout" method="post">
                <button className="text-xl" type="submit">
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>

        < /* RIGHT SECTION*/ div className="ml-10 flex flex-col w-100">
          <h1 className="text-3xl">Edit Account</h1>

          <label htmlFor="firstName">First Name:</label>
          <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className="border border-solid border-black mb-2 w-100 rounded-sm"
          value={fullname || ''}
          onChange={(e) => setFullname(e.target.value)}
          />

          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" placeholder="Surname" className="border border-solid border-black mb-2 w-100 rounded-sm" />

          <label htmlFor="email">Email:</label>
          <input
          type="text"
          id="email"
          placeholder="Email"
          className="border border-solid border-black mb-2 w-100 rounded-sm"
          value={claims?.email ?? ''}
          disabled
          />

          <label htmlFor="enquiry">Bio:</label>
          <textarea name="" id="bio" placeholder="Bio" className="border border-solid border-black mb-2 w-100 rounded-sm" ></textarea>

          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <button
          className="bg-winery text-white px-4 py-2 w-35 mt-5 rounded-sm hover:bg-customFore"
          onClick={() => updateProfile({ fullname, username, website })}
          disabled={loading || !claims?.sub}
          >{loading ? 'Loading ...' : 'Edit'}</button>
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
  )
}