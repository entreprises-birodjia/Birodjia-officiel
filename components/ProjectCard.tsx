import Image from 'next/image';
type Project = { titleFr:string; titleEn?:string; slug:string; categoryFr?:string; categoryEn?:string; summaryFr?:string; summaryEn?:string; status?:string; logoUrl?:string; coverUrl?:string };
export default function ProjectCard({ project, locale }: { project:Project; locale:string }) {
 const title = locale === 'fr' ? project.titleFr : (project.titleEn || project.titleFr);
 const summary = locale === 'fr' ? project.summaryFr : (project.summaryEn || project.summaryFr);
 const category = locale === 'fr' ? project.categoryFr : (project.categoryEn || project.categoryFr);
 const status = ({development:locale==='fr'?'En développement':'In development',active:locale==='fr'?'En activité':'Active',launch:locale==='fr'?'En lancement':'Launching',paused:locale==='fr'?'En pause':'Paused',completed:locale==='fr'?'Terminé':'Completed'} as Record<string,string>)[project.status || ''] || '';
 return <article className="projectCard"><div className="projectImage">{project.logoUrl ? <Image src={project.logoUrl} alt={`Logo ${title}`} fill sizes="(max-width:700px) 90vw, 40vw" style={{objectFit:'contain',padding:'24px'}}/> : <span className="projectWordmark">{title}</span>}</div><div className="projectBody"><small>{category || 'BIRODJIA'}</small><h3>{title}</h3><p>{summary}</p><div className="projectFoot"><span className="status">{status}</span><a href={`/${locale}/projets/${project.slug}`}>{locale==='fr'?'Découvrir':'Discover'} ↗</a></div></div></article>;
}
