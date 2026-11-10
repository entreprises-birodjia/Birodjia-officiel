'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function SiteHeader({ locale }: { locale: string }) {
  const pathname = usePathname();
  const other = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(/^\/(fr|en)/, `/${other}`);
  const t = locale === 'fr'
    ? { home:'Accueil', about:'À propos', projects:'Projets en cours', future:'Projets à venir', contact:'Partenariats & Contact' }
    : { home:'Home', about:'About', projects:'Current projects', future:'Upcoming projects', contact:'Partnerships & Contact' };
  return <header className="header"><Link className="wordmark" href={`/${locale}`} aria-label="BIRODJIA — accueil"><Image src="/logos/birodjia-wordmark-navy-transparent.png" alt="BIRODJIA — People Ideas Impact" width={174} height={52} priority /></Link><nav><Link href={`/${locale}`}>{t.home}</Link><Link href={`/${locale}#apropos`}>{t.about}</Link><Link href={`/${locale}#projets`}>{t.projects}</Link><Link href={`/${locale}#avenir`}>{t.future}</Link><Link className="navCta" href={`/${locale}#contact`}>{t.contact} ↗</Link></nav><Link className="lang" href={switchPath}>{other.toUpperCase()}</Link></header>;
}
