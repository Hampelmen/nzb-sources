import type { Indexer } from './indexerStructure';

export const publicIndexers: Indexer[] = [
  {
    id: 'binsearch.info',
    name: 'binsearch.info',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: 'No API',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'noApi',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'binzb.com',
    name: 'BiNZB.com',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: 'No API',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'noApi',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'findnzb.net',
    name: 'FindNZB.net',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: 'No API but RSS',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'noApiButRSS',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'lolo.sickbeard.com',
    name: 'lolo.sickbeard.com',
    registration: 'open',
    payments: ['App only'],
    crypto: [],
    content: '',
    memberships: [
      {
        nameKey: 'free',
        apiPerDay: 'unlimited',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbfriends.com',
    name: 'NZBFriends.com',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: 'No API but RSS',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'noApiButRSS',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbid.net',
    name: 'nzbID.net',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: 'No API but RSS',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'noApiButRSS',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbindex.com',
    name: 'NZBindex.com (beta)',
    registration: 'open',
    payments: [],
    crypto: [],
    content: 'API not working (coming soon?)',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'notWorking',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbking.com',
    name: 'NZBKing.com',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: 'No API',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'noApi',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
];
