'use client';
import Link from 'next/link';

export default function Header() {
  return <header className="header"><div className="nav wrap">
    <Link href="/" className="brand"><span>YC</span><div><strong>Young Cee</strong><small>Jersey / Sport Wears</small></div></Link>
    <nav><Link href="/">Home</Link><Link href="/shop">Shop</Link><Link href="/#custom">Customization</Link><Link href="/contact">Contact</Link></nav>
    <a className="navOrder" href="https://wa.me/2349025792349?text=Hello%20Young%20Cee%20Jersey%2C%20I%27d%20like%20to%20make%20an%20order." target="_blank">Order on WhatsApp</a>
  </div></header>
}
