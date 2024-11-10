import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const transportCompanies = [
  { name: "KAI", icon: "/kai.svg" },
  { name: "TransJakarta", icon: "/transjakarta.svg" },
  { name: "MRT", icon: "/mrt.svg" },
  { name: "LRT Jakarta", icon: "/lrt-jakarta.svg" },
  { name: "LRT Jabodebek", icon: "/lrt-jabodebek.svg" },
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: FaTwitter },
  { name: "Facebook", href: "#", icon: FaFacebook },
  { name: "TikTok", href: "#", icon: FaTiktok },
  { name: "YouTube", href: "#", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Transport Company Logos */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
          {transportCompanies.map((company) => (
            <div key={company.name} className="h-24 w-24">
              <Image
                src={company.icon}
                alt={`${company.name} logo`}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-navy-900 text-2xl font-bold">TransitPlus</h2>
            <p className="text-gray-600">
              Join the Commuterline Wave for a reliable and thrilling commuting
              experience
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-primary"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-navy-900 mb-4 text-lg font-semibold">
              Products
            </h3>
            <ul className="space-y-2">
              {["Dashboard", "Travel Points", "Events", "Reward System"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="text-navy-900 mb-4 text-lg font-semibold">
              Get Help
            </h3>
            <ul className="space-y-2">
              {["About Us", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Details Section */}
          <div>
            <h3 className="text-navy-900 mb-4 text-lg font-semibold">
              Details
            </h3>
            <ul className="space-y-2">
              {["Executive Summary", "Product Design"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col justify-between border-t pt-8 md:flex-row">
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-primary">
              Terms and Condition
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            © Copyright 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
