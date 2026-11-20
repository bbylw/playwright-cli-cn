import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

// Static export: ship the whole index (multilingual tokenizer by default,
// which handles Chinese) and let the client query it in the browser.
export const { staticGET: GET } = createFromSource(source);