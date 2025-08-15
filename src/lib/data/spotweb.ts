import type { Indexer } from './indexerStructure';

export const spotwebIndexers: Indexer[] = [
  {
    id: 'clubnzb.com',
    name: 'clubnzb.com',
    registration: 'open-no-need',
    payments: [],
    crypto: [],
    content: '',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'unlimited',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbsearchmachine.com',
    name: 'nzbsearchmachine.com',
    registration: 'open-weekends',
    payments: [],
    crypto: [],
    content: '',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'unlimited',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbserver.com',
    name: 'nzbserver.com',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: "Can't be added to ARRs",
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'cantBeAdded',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'nzbstars.com',
    name: 'NZBStars.com',
    registration: 'open-no-need',
    payments: [],
    crypto: [],
    content: '',
    memberships: [
      {
        nameKey: 'free',
        apiKey: 'unlimited',
        nzbPerDay: 'unlimited',
        duration: 'Lifetime',
        priceKey: 'free',
      },
    ],
  },
  {
    id: 'spotnzb.com',
    name: 'spotnzb.com',
    registration: 'no-accounts',
    payments: [],
    crypto: [],
    content: '',
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
