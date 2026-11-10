import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projets',
  type: 'document',
  fields: [
    defineField({ name: 'titleFr', title: 'Nom du projet (français)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleEn', title: 'Project name (English)', type: 'string' }),
    defineField({ name: 'slug', title: 'Adresse web / slug', type: 'slug', options: { source: 'titleFr', maxLength: 96 }, validation: r => r.required() }),
    defineField({ name: 'categoryFr', title: 'Secteur (français)', type: 'string' }),
    defineField({ name: 'categoryEn', title: 'Sector (English)', type: 'string' }),
    defineField({ name: 'summaryFr', title: 'Résumé (français)', type: 'text', rows: 3 }),
    defineField({ name: 'summaryEn', title: 'Summary (English)', type: 'text', rows: 3 }),
    defineField({ name: 'descriptionFr', title: 'Description détaillée (français)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'descriptionEn', title: 'Detailed description (English)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'logo', title: 'Logo officiel', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'cover', title: 'Image de couverture', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Galerie d’images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'status', title: 'Statut', type: 'string', options: { list: [
      { title: 'En développement', value: 'development' }, { title: 'En activité', value: 'active' },
      { title: 'En lancement', value: 'launch' }, { title: 'En pause', value: 'paused' }, { title: 'Terminé', value: 'completed' }
    ] }, initialValue: 'development', validation: r => r.required() }),
    defineField({ name: 'visibility', title: 'Publication', type: 'string', options: { list: [
      { title: 'Brouillon / privé', value: 'draft' }, { title: 'Projet en cours', value: 'current' }, { title: 'Projet à venir', value: 'upcoming' }
    ] }, initialValue: 'draft', validation: r => r.required() }),
    defineField({ name: 'website', title: 'Site internet', type: 'url' }),
    defineField({ name: 'socialLinks', title: 'Liens sociaux', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Nom', type: 'string' }, { name: 'url', title: 'URL', type: 'url' }
    ] }] }),
    defineField({ name: 'order', title: 'Ordre d’affichage', type: 'number', initialValue: 100 }),
    defineField({ name: 'seoTitleFr', title: 'SEO — titre FR', type: 'string' }),
    defineField({ name: 'seoTitleEn', title: 'SEO — title EN', type: 'string' }),
    defineField({ name: 'seoDescriptionFr', title: 'SEO — description FR', type: 'text', rows: 2 }),
    defineField({ name: 'seoDescriptionEn', title: 'SEO — description EN', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'titleFr', subtitle: 'visibility', media: 'logo' } }
});
