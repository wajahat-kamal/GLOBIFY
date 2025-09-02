import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-secondary shadow-xl py-8 px-6 lg:px-30">
      <div className="flex justify-between flex-col md:flex-row gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-wide">
            GLOBIFY
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-sm">
            Stay updated with the latest blogs, technology news, and lifestyle
            trends. Your go-to hub for knowledge & inspiration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-right">
            <li>
              <a
                href="/"
                className="hover:text-primary hover:underline transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-primary hover:underline transition-colors"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-primary hover:underline transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-primary hover:underline transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        {/* Left Side */}
        <p>© {new Date().getFullYear()} GLOBIFY. All rights reserved.</p>

        {/* Creator Credit */}
        <p className="mt-4 md:mt-0 text-gray-600">
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://wajahatkamal-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-400 hover:text-primary transition"
          >
            Wajahat Kamal
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
