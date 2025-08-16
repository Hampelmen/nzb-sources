// Canonical data model: one Indexer has many memberships
export type RegistrationCode =
  | 'application'
  | 'open'
  | 'invite'
  | 'no-accounts'
  | 'open-no-need'
  | 'open-weekends'
  | 'unknown';

export type Limit = number | 'unlimited' | '?' | null;
export type apiLimit = 'noApi' | 'unlimited' | 'noApiButRSS' | 'cantBeAdded' | 'notWorking' | null;

// Optional keys let you store language-agnostic codes and translate at render time.
export type Membership = {
  name?: string; // e.g. "Free/User" (legacy/raw)
  nameKey?: string; // e.g. "free", "trial", "vip" (preferred)
  apiPerDay?: Limit;
  apiKey?: apiLimit;
  nzbPerDay?: Limit;
  duration?: string; // free text (e.g. "1 year", "Lifetime")
  price?: string; // e.g. "$15", "Free"
  priceKey?: string; // e.g. "free", "trial" if you want to translate price label too
};

export type Indexer = {
  id: string; // slug: e.g. 'abnzb.com'
  name: string; // display name
  registration: RegistrationCode;
  payments?: string[]; // e.g. ['PayPal', 'Stripe']
  crypto?: string[]; // e.g. ['BTC','XMR']
  content?: string; // e.g. 'EN', 'DE (ES, EN)', 'EN, Anime'
  url?: string; // optional
  memberships: Membership[];
};
