import { apiLimit, RegistrationCode } from '@/lib/data/indexerStructure';
import { writable } from 'svelte/store';

export type Lang = 'en' | 'de';
export const langStore = writable<Lang>('en');

export const strings = {
  en: {
    title: 'NZB Sources',
    subtitle: 'Your ultimate guide to Usenet indexers',
    notice:
      'For now this site only lists Usenet Indexers. However, forums and other websites will be added in the future.',
    nav: {
      navmoderated: 'Moderated Indexers',
      navpublic: 'Public Indexers',
      navspotweb: 'Spotweb Indexers',
      deals: 'Provider Deals',
      guide: 'Usenet Guide (DE)',
      discord: 'Usenet',
      forumsTitle: 'Forums',
    },
    sections: {
      moderatedTitle: 'Moderated Indexers',
      moderatedDesc:
        'Best kind of indexer. They offer API access, which makes automation with tools like Sonarr and Radarr possible, and NZBs can be directly sent to your download manager.',
      publicTitle: 'Public Indexers',
      publicDesc:
        'They index automatically from Usenet groups. They mostly contain obfuscated headers, and NZBs never come with a password.',
      uploadWarning:
        'Beware that they might also index malicious uploads containing trojans or other viruses.',
      spotwebDesc: 'Great for Dutch and Flemish content, but also has a lot of English content.',
      forumsDesc: "Forums do not offer API's",
    },
    tableHeaders: {
      indexer: 'Indexer',
      forum: 'Forum',
      registration: 'Registration',
      memberships: 'Memberships',
      payment: 'Payment',
      crypto: 'Crypto',
      content: 'Content',
      opened: 'Opened',
    },
    nestedHeaders: {
      membership: 'Membership',
      apiDay: 'API/Day',
      nzbDay: 'NZB/Day',
      duration: 'Duration',
      price: 'Price',
    },
    actions: {
      searchPlaceholder: 'Search indexers...',
      searchPlaceholderForums: 'Search forum...',
      showAll: (n: number) => `Show memberships (${n})`,
      expandAll: 'Expand all memberships',
      collapseAll: 'Collapse all memberships',
      show: 'Show',
      hide: 'Hide',
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
      scrollTop: 'Back to top',
      viewOnGithub: 'VIEW ON GitHub',
    },
    filters: {
      title: 'Filters',
      minApi: 'Min API/Day',
      minNzb: 'Min NZB/Day',
      language: 'Content focused on',
      any: 'Any',
      lifetimeOnly: 'Lifetime only',
      freeOnly: 'Free only',
      supportsCrypto: 'Supports crypto',
      clear: 'Clear filters',
    },
    labels: {
      unlimited: 'Unlimited',
      unknown: '?',
    },
    memberships: {
      free: 'Free',
      trial: 'Trial',
      member: 'Member',
      user: 'User',
      guest: 'Guest',
    },
    registration: {
      application: 'Application',
      open: 'Open',
      invite: 'Invite',
      'invite only': 'Invite only',
      closed: 'Closed',
      'no-accounts': 'No accounts',
      'open-no-need': 'Open/no need',
      'open-weekends': 'Open on weekends',
      down: 'down',
      unknown: '?',
    },
    footer: {
      notice: "*if you know, you know. If you don't, please don't ask.",
      thanksPrefix: 'Thx to Just2it, sbestran, Captian-Jack-Cola &',
    },
    api: {
      noApi: 'No API',
      unlimited: 'Unlimited',
      noApiButRSS: 'No API but RSS',
      cantBeAdded: "Can't be added to ARRs",
      notWorking: 'Not working',
      unknown: '?',
    },
    replace: {
      day: 'day',
      days: 'days',
      year: 'year',
      years: 'years',
      '(until--30d--no--login)': '(until 30 days without login)',
      '(until--180d--no--login)': '(until 180 days without login)',
      '(often--down)': '(often down)',
    },
  },
  de: {
    title: 'NZB-Quellen',
    subtitle: 'Dein ultimativer Leitfaden zu Usenet-Indexern',
    notice:
      'Momentan listet diese Seite nur Usenet-Indexer auf. Foren und andere Websites werden in Zukunft hinzugefügt.',
    nav: {
      navmoderated: 'Moderierte Indexer',
      navpublic: 'Öffentliche Indexer',
      navspotweb: 'Spotweb-Indexer',
      deals: 'Anbieter-Angebote',
      guide: 'Usenet Guide (DE)',
      discord: 'Usenet',
      forumsTitle: 'Forums',
    },
    sections: {
      moderatedTitle: 'Moderierte Indexer',
      moderatedDesc:
        'Beste Art von Indexer. Sie bieten API-Zugriff, was Automatisierung mit Tools wie Sonarr und Radarr ermöglicht, und NZBs können direkt an deinen Download-Manager gesendet werden.',
      publicTitle: 'Öffentliche Indexer',
      publicDesc:
        'Sie indexieren automatisch aus Usenet-Gruppen. Meist mit verschleierten Headern, und NZBs kommen nie mit Passwort.',
      uploadWarning:
        'Achtung: Es können auch bösartige Uploads mit Trojanern oder anderen Viren enthalten sein.',
      spotwebDesc:
        'Hervorragend für niederländische und flämische Inhalte, hat aber auch viele englische Inhalte.',
      forumsDesc: "Forums bieten keine API's an",
    },
    tableHeaders: {
      indexer: 'Indexer',
      forum: 'Forum',
      registration: 'Registrierung',
      memberships: 'Mitgliedschaften',
      payment: 'Zahlung',
      crypto: 'Krypto',
      content: 'Inhalt',
      opened: 'Zuletzt Geöffnet',
    },
    nestedHeaders: {
      membership: 'Mitgliedschaft',
      apiDay: 'API/Tag',
      nzbDay: 'NZB/Tag',
      duration: 'Laufzeit',
      price: 'Preis',
    },
    actions: {
      searchPlaceholder: 'Indexer suchen...',
      searchPlaceholderForums: 'Forum suchen...',
      showAll: (n: number) => `Mitgliedschaften anzeigen (${n})`,
      expandAll: 'Alle Mitgliedschaften aufklappen',
      collapseAll: 'Alle Mitgliedschaften zuklappen',
      show: 'Einblenden',
      hide: 'Ausblenden',
      theme: 'Theme',
      dark: 'Dunkel',
      light: 'Hell',
      scrollTop: 'Nach Oben scrollen',
      viewOnGithub: 'AUF GITHUB ANSEHEN',
    },
    filters: {
      title: 'Filter',
      minApi: 'Min. API/Tag',
      minNzb: 'Min. NZB/Tag',
      language: 'Focus auf Inhalt',
      any: 'Alle',
      lifetimeOnly: 'Nur Lifetime',
      freeOnly: 'Nur Kostenlos',
      supportsCrypto: 'Unterstützt Krypto',
      clear: 'Zurücksetzen',
    },
    labels: {
      unlimited: 'Unbegrenzt',
      unknown: '?',
    },
    memberships: {
      free: 'Kostenlos',
      trial: 'Testzugang',
      member: 'Mitglied',
      user: 'User',
      guest: 'Gast',
    },
    registration: {
      application: 'Bewerbung',
      open: 'Offen',
      invite: 'per Einladung',
      'invite only': 'nur per Einladung',
      closed: 'Geschlossen',
      'no-accounts': 'Keine Konten',
      'open-no-need': 'Offen/keine Anmeldung',
      'open-weekends': 'Am Wochenende offen',
      down: 'Down',
      unknown: '?',
    },
    footer: {
      notice: "*Wenn du's weißt, weißt du's. Wenn nicht, bitte nicht fragen.",
      thanksPrefix: 'Danke an Just2it, sbestran, Captian-Jack-Cola &',
    },
    api: {
      noApi: 'Keine Api',
      unlimited: 'Unlimitiert',
      noApiButRSS: 'Keine API aber RSS',
      cantBeAdded: 'Nicht zu ARRs hinzufügbar',
      notWorking: 'Geht nicht',
      unknown: '?',
    },
    replace: {
      day: 'Tag',
      days: 'Tage',
      year: 'Jahr',
      years: 'Jahre',
      '(until--30d--no--login)': '(bis 30 Tage ohne Anmeldung)',
      '(until--180d--no--login)': '(bis 180 Tage ohne Anmeldung)',
      '(often--down)': '(Hohe Ausfall rate)',
    },
  },
} as const;

export function regLabel(lang: Lang, code: RegistrationCode) {
  // @ts-ignore
  return strings[lang].registration[code] ?? strings[lang].registration.unknown;
}

export function fmtLimit(lang: Lang, v?: number | 'unlimited' | '?' | null) {
  if (v === 'unlimited') return strings[lang].labels.unlimited;
  if (v === '?' || v == null) return strings[lang].labels.unknown;
  return String(v);
}

// key → localized label (e.g. 'free' → 'Free'/'Kostenlos')
export function tMembership(lang: Lang, key: string) {
  return (strings[lang].memberships as Record<string, string>)[key] ?? key;
}

const WHITESPACE_SPLIT = /(\s+)/;

export function sReplace(lang: Lang, text: string): string {
  const dict = strings[lang]?.replace as Record<string, string> | undefined;
  if (!dict || !text) return text;

  const parts = text.split(WHITESPACE_SPLIT);

  for (let i = 0; i < parts.length; i++) {
    const token = parts[i];

    if (!token || !token.trim()) continue;

    const lowered = token.toLowerCase();
    const mapped = dict[lowered];
    if (mapped !== undefined) {
      parts[i] = mapped;
    }
  }

  return parts.join('');
}

export function tApiKey(lang: Lang, key: apiLimit) {
  if (key === null) return strings[lang].api.unknown;
  return strings[lang].api[key] ?? strings[lang].api.unknown;
}
