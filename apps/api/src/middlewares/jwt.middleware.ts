import { jwt } from '@elysiajs/jwt';

// Configs
import { environment } from '@/configs';

export const JWTMiddleware = jwt({ secret: environment.JWT_SECRET });
