import type { Indexer } from './indexerStructure';

export const spotwebIndexers: Indexer[] = [
  {
    id: 'clubnzb.com',
    name: 'ClubNZB',
    url: 'https://clubnzb.com/',
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
    id: 'nzbserver.com',
    name: 'NZBServer',
    url: 'https://www.nzbserver.com/',
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
    name: 'NZBStars',
    url: 'https://nzbstars.com/',
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
    name: 'SpotNZB',
    url: 'https://spotnzb.com/',
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
