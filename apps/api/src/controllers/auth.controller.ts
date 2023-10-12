import { Elysia } from 'elysia';
import { cookie } from '@elysiajs/cookie';

// Auth
import { authProviders } from '@/auth';

// Configs
import { environment } from '@/configs';

// Contexts
import { apiContext } from '@/contexts';

export const authController = new Elysia({
  name: '@apps/api/controllers/auth'
})
  .use(cookie())
  .use(apiContext)
  .group('/auth', handler =>
    handler
      .get(
        '/login/google',
        async ({ set, setCookie }) => {
          const [url, state] = await authProviders.google.getAuthorizationUrl();

          setCookie('google_auth_state', state, {
            maxAge: 60 * 60,
            httpOnly: true,
            secure: environment.ENV === 'production',
            path: '/'
          });

          set.redirect = String(url);
        },
        {
          detail: {
            summary: 'Login with Google',
            tags: ['Auth']
          }
        }
      )
      .get('/google/callback', async () => {}, {
        detail: {
          summary: 'Google callback',
          tags: ['Auth']
        }
      })
      .get(
        '/login/facebook',
        async ({ set, setCookie }) => {
          const [url, state] = await authProviders.facebook.getAuthorizationUrl();

          setCookie('facebook_auth_state', state, {
            maxAge: 60 * 60,
            httpOnly: true,
            secure: environment.ENV === 'production',
            path: '/'
          });

          set.redirect = String(url);
        },
        {
          detail: {
            summary: 'Login with Facebook',
            tags: ['Auth']
          }
        }
      )
      .get('/facebook/callback', async () => {}, {
        detail: {
          summary: 'Facebook callback',
          tags: ['Auth']
        }
      })
  );
