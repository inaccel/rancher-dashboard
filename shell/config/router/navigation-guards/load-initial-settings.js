import { fetchInitialSettings } from '@shell/utils/settings';

export function install(router, context) {
  router.beforeEach((to, from, next) => loadInitialSettings(to, from, next, context));
}

export async function loadInitialSettings(to, from, next, { store }) {
  try {
    await fetchInitialSettings(store);
  } catch (e) {
    console.error('Failed fetching initial settings', e); // eslint-disable-line no-console
  }

  next();
}
