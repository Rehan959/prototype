"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Separator,
} from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "Tutorials", href: "/tutorials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Data Security", href: "/security" },
      ],
    },
  ];

  const socialIcons = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <Link href="/" className="text-xl font-bold">
                Relay
              </Link>
              <p className="text-sm text-muted-foreground">
                Building solutions that make a difference since 2020
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@yourcompany.com" className="hover:underline">
                  hello@yourcompany.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, Suite 100, City, Country</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Separator className="mb-8" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Stay Updated</h3>
              <div className="flex max-w-sm gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button size="sm" className="shrink-0">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YourCompany. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
