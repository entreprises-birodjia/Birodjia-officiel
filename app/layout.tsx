import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'BIRODJIA — People • Ideas • Impact', description: 'BIRODJIA développe des projets, connecte les opportunités et construit des activités tournées vers l’avenir.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
