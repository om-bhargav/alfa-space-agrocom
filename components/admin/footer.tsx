import React from 'react'
import Link from 'next/link' 
const footer = () => {
  return (
       <footer className="bg-[#9c2528] text-white py-2">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-6">

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <Link href="/admin/u/dashboard" className="hover:underline">
              Home
            </Link>
            <Link href="/admin/u/products" className="hover:underline">
              Products
            </Link>
            <Link
              href="/admin/u/listqueries"
              className="hover:underline"
            >
              Customer Queries
            </Link>
           <Link href="/admin/u/settings" className="hover:underline">
              Settings
            </Link>
          </div>
        </div>

        {/* Divider */}

        {/* Bottom Section */}
        <div className="flex flex-col-reverse gap-5 justify-between items-center">
          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Alfa Agro. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.755 0 8.333.013 7.052.072 5.775.131 4.548.401 3.473 1.476 2.398 2.551 2.128 3.778 2.07 5.055.013 8.333 0 8.755 0 12s.013 3.667.072 4.948c.059 1.277.329 2.504 1.404 3.579 1.075 1.075 2.302 1.345 3.579 1.404 1.281.059 1.703.072 4.948.072s3.667-.013 4.948-.072c1.277-.059 2.504-.329 3.579-1.404 1.075-1.075 1.345-2.302 1.404-3.579.059-1.281.072-1.703.072-4.948s-.013-3.667-.072-4.948c-.059-1.277-.329-2.504-1.404-3.579-1.075-1.075-2.302-1.345-3.579-1.404C15.667.013 15.245 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer