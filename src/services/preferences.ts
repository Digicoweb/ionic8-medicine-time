// src/services/preferences.ts
import { Preferences } from '@capacitor/preferences';

export async function setPreference(key: string, value: any): Promise<void> {
  const str = JSON.stringify(value);
  await Preferences.set({ key, value: str });
}

export async function getPreference<T>(key: string): Promise<T | null> {
  const { value } = await Preferences.get({ key });
  if (value === null) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return (value as unknown) as T;
  }
}

export async function removePreference(key: string): Promise<void> {
  await Preferences.remove({ key });
}

export async function clearPreferences(): Promise<void> {
  await Preferences.clear();
}
