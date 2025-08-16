import { writable } from 'svelte/store';

export type LanguageCode = 'any' | string;

export interface FiltersState {
  minApi: number | null;
  minNzb: number | null;
  language: LanguageCode; // 'any' or 2-letter codes (EN/DE/... from data)
  lifetimeOnly: boolean;
  freeOnly: boolean;
  supportsCrypto: boolean;
}

export const defaultFilters: FiltersState = {
  minApi: null,
  minNzb: null,
  language: 'any',
  lifetimeOnly: false,
  freeOnly: false,
  supportsCrypto: false,
};

export const filters = writable<FiltersState>({ ...defaultFilters });

export function resetFilters() {
  filters.set({ ...defaultFilters });
}
