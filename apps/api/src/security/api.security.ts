/** See <https://helmetjs.github.io/> for more security options */
export const apiSec = {
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'https://unpkg.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://unpkg.com']
    }
  }
};
