// src/lib/slugify.ts
import { transliterate as slugify } from 'transliteration';

export function generateSlug(title: string): string {
  // Транслітеруємо кирилицю → латиниця + нижній регістр + дефіси
  const transliterated = slugify(title, { unknown: '' }).toLowerCase();
  // Замінюємо пробіли та спеціальні символи на дефіси
  return transliterated
    .replace(/[^a-z0-9]+/g, '-')           // все не-букви/цифри → -
    .replace(/^-+|-+$/g, '')               // прибрати дефіси з початку/кінця
    .replace(/-+/g, '-');                  // кілька дефісів → один
}