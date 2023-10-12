// app.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('./lucia.js').Auth;
  type DatabaseUserAttributes = {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    birthDate: string;
    email: string;
    picture: string;
    role: 'user' | 'admin';
    active: boolean;
  };
  type DatabaseSessionAttributes = {};
}
