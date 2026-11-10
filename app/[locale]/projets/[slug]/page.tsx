import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import { client, projectBySlugQuery, sanityConfigured } from '@/lib/sanity';
import { defaultProjects } from '@/lib/default-projects';
import { PortableText } from '@portabletext/react';

export default async function ProjectPage({params}:{params:Promise<{locale:string;slug:string}>}) {
 const {locale,slug}=await params; const en=locale==='en';
 let project:any = defaultProjects.find(p => p.slug === slug) || null;
 if (sanityConfigured) {
   try { const cmsProject=await client.fetch(projectBySlugQuery,{slug}); if (cmsProject) project=cmsProject; } catch {}
 }
 if(!project) return <><SiteHeader locale={locale}/><main className="notFound"><h1>{en?'Project not available yet':'Projet non disponible pour le moment'}</h1><Link href={`/${locale}`}>{en?'Back to BIRODJIA':'Retour à BIRODJIA'} ↗</Link></main></>;
 const title=en?(project.titleEn||project.titleFr):project.titleFr;
 const summary=en?(project.summaryEn||project.summaryFr):project.summaryFr;
 const category=en?(project.categoryEn||project.categoryFr):project.categoryFr;
 const description=en?project.descriptionEn:project.descriptionFr;
 return <><SiteHeader locale={locale}/><main className="detail"><div className="kicker">BIRODJIA / {en?'PROJECT':'PROJET'}</div><div className="detailBrand">{(project.logoUrl || project.coverUrl) && <Image src={project.logoUrl || project.coverUrl} alt={`Logo ${title}`} width={260} height={150} style={{objectFit:'contain',maxWidth:'100%',height:'auto'}}/>}</div><p className="detailCategory">{category}</p><h1>{title}</h1><p className="lead">{summary}</p>{project.coverUrl&&<div className="detailCover"><Image src={project.coverUrl} alt={title} fill style={{objectFit:'cover'}}/></div>}{description ? <div className="richText"><PortableText value={description}/></div> : <p>{summary}</p>}{project.website&&<p><a href={project.website} target="_blank" rel="noreferrer">{en?'Visit the project website':'Visiter le site du projet'} ↗</a></p>}<Link href={`/${locale}#projets`} className="quietLink">← {en?'Back to BIRODJIA':'Retour aux projets'}</Link></main></>;
}
