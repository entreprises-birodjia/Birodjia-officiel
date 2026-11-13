import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'BIRODJIA — People • Ideas • Impact', description: 'BIRODJIA développe des entreprises et des projets innovants à dimension internationale, connecte les opportunités et construit l’avenir au-delà des frontières.'.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
