/**
 * Dados do perfil e canais de contato (fonte única).
 *
 * Aqui ficam apenas dados estruturais — nome, links, metadados — que NÃO são
 * tradução. Os textos bilíngues (bio, títulos de cena, etc.) vivem nos
 * dicionários de i18n (src/i18n/locales). Centralizar os links aqui evita
 * repetir o mesmo href em Hero, Footer e Contato.
 */

export const PROFILE = {
  name: "Gabriel Hermont",
  firstName: "Gabriel",
  lastName: "Hermont",
  email: "gabrielsjh2007@gmail.com",
  // Telefone no formato internacional só com dígitos (usado no link do WhatsApp).
  whatsapp: "5531992021581",
  whatsappDisplay: "+55 (31) 99202-1581",
  github: "https://github.com/gbhermont",
  linkedin: "https://www.linkedin.com/in/gbhermont",
};

/**
 * Redes sociais exibidas no hero e no rodapé (ordem importa).
 *   label → texto do link
 *   href  → destino
 */
export const SOCIALS = [
  { label: "GitHub", href: PROFILE.github },
  { label: "LinkedIn", href: PROFILE.linkedin },
  { label: "E-mail", href: `mailto:${PROFILE.email}` },
  { label: "WhatsApp", href: `https://wa.me/${PROFILE.whatsapp}` },
];

/**
 * Canais de contato exibidos na cena "Contato".
 *   kind  → rótulo curto (ex.: E-MAIL)
 *   value → texto visível (ex.: o próprio e-mail)
 *   href  → destino
 */
export const CONTACT_CHANNELS = [
  {
    kind: "E-MAIL",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    kind: "WHATSAPP",
    value: PROFILE.whatsappDisplay,
    href: `https://wa.me/${PROFILE.whatsapp}`,
  },
  {
    kind: "LINKEDIN",
    value: "linkedin.com/in/gbhermont",
    href: PROFILE.linkedin,
  },
];

export default PROFILE;
