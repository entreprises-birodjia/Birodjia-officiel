import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Réglages du site',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nom du site', type: 'string', initialValue: 'BIRODJIA' }),
    defineField({ name: 'email', title: 'E-mail professionnel', type: 'string', initialValue: 'entreprises@birodjia.com', validation: r => r.required() }),
    defineField({ name: 'phone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'address', title: 'Adresse postale', type: 'text', rows: 2 }),
    defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
    defineField({ name: 'heroTitleFr', title: 'Accueil — titre FR', type: 'string' }),
    defineField({ name: 'heroTitleEn', title: 'Home — title EN', type: 'string' }),
    defineField({ name: 'heroTextFr', title: 'Accueil — texte FR', type: 'text', rows: 3 }),
    defineField({ name: 'heroTextEn', title: 'Home — text EN', type: 'text', rows: 3 }),
    defineField({ name: 'aboutFr', title: 'À propos — français', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'aboutEn', title: 'About — English', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'upcomingIntroFr', title: 'Projets à venir — introduction FR', type: 'text', rows: 3 }),
    defineField({ name: 'upcomingIntroEn', title: 'Upcoming projects — introduction EN', type: 'text', rows: 3 }),
    defineField({ name: 'contactIntroFr', title: 'Contact — introduction FR', type: 'text', rows: 3 }),
    defineField({ name: 'contactIntroEn', title: 'Contact — introduction EN', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'Logo officiel BIRODJIA', type: 'image' }),
    defineField({ name: 'defaultSocialImage', title: 'Image de partage par défaut', type: 'image' }),
  ],
  preview: { prepare: () => ({ title: 'Réglages généraux BIRODJIA' }) }
});
