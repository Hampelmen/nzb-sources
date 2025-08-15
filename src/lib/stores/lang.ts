import { writable } from 'svelte/store';

export type Lang = 'en' | 'de';
export const langStore = writable<Lang>('en');
