import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const links = {
  quick: [
    { href: '#why', text: 'Why AI Avatars' },
    { href: '#how', text: 'How to Use' },
    { href: '#success', text: 'Success Stories' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#pricing', text: 'Pricing' },
    { href: '#faq', text: 'FAQ' }
  ],
  legal: [
    { href: '/privacy', text: 'Privacy Policy' },
    { href: '/terms', text: 'Terms of Service' },
    { href: '/cookies', text: 'Cookie Policy' }
  ],
  contact: [
    {
      icon: Phone,
      href: 'tel:+19547745305',
      text: '+1 (954) 774-5305'
    },
    {
      icon: Mail,
      href: 'mailto:info@viksproduction.com',
      text: 'info@viksproduction.com'
    },
    {
      icon: MapPin,
      text: 'San Francisco Bay Area'
    }
  ]
} as const;

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/95 border-t border-[#75d031]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-gray-400 mt-6">
              Transform your video marketing with AI-powered avatars. Professional, scalable, and engaging video content creation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.quick.map(link => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.text}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {links.contact.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-[#75d031]" />
                  {item.href ? (
                    <FooterLink href={item.href}>{item.text}</FooterLink>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map(link => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.text}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#75d031]/10 text-center text-gray-400">
          <p>&copy; {currentYear} VIKS Production LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}