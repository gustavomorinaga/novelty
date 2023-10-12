import { lucia } from 'lucia';
import { elysia } from 'lucia/middleware';
import { libsql as adapter } from '@lucia-auth/adapter-sqlite';
import {
  google as googleProvider,
  facebook as facebookProvider
} from '@lucia-auth/oauth/providers';

// Configs
import { environment } from '@/configs';

// Databases
import { apiClient } from '@/databases';

export const auth = lucia({
  env: environment.ENV === 'production' ? 'PROD' : 'DEV',
  middleware: elysia(),
  adapter: adapter(apiClient, {
    user: 'user',
    key: 'user_key',
    session: 'user_session'
  }),
  getUserAttributes: data => ({
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    displayName: data.displayName,
    birthDate: data.birthDate,
    email: data.email,
    picture: data.picture,
    role: data.role,
    active: data.active
  })
});

export const authProviders = {
  google: googleProvider(auth, {
    clientId: environment.API_GOOGLE_CLIENT_ID,
    clientSecret: environment.API_GOOGLE_CLIENT_SECRET,
    redirectUri: `${environment.API_URL}/api/auth/google/callback`
  }),
  facebook: facebookProvider(auth, {
    clientId: environment.API_FACEBOOK_CLIENT_ID,
    clientSecret: environment.API_FACEBOOK_CLIENT_SECRET,
    redirectUri: `${environment.API_URL}/api/auth/facebook/callback`
  })
};

export type TAuth = typeof auth;
