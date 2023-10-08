import { eq, like } from 'drizzle-orm';

// Databases
import { apiDB, schema } from '@/databases';

// Types
import type {
  TUserCreateSchema,
  TUserFindSchema,
  TUserSelectSchema,
  TUserUpdateSchema
} from '@/validations';

type TUserRepository = {
  db: typeof apiDB;
  schema: typeof schema.users;
};

type TUserRepositoryFindAll = TUserRepository & TUserSelectSchema;
type TUserRepositoryFindById = TUserRepository & TUserFindSchema;
type TUserRepositoryCreate = TUserRepository & TUserCreateSchema;
type TUserRepositoryUpdate = TUserRepository & TUserUpdateSchema;

export const userRepository = {
  async findAll({ db, schema: users, query }: TUserRepositoryFindAll) {
    return await db
      .select({
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        displayName: users.displayName,
        birthDate: users.birthDate,
        email: users.email,
        role: users.role,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt
      })
      .from(users)
      .where(like(users.displayName, `%${query.displayName}%`));
  },

  async findByID({ db, schema: users, params: { id } }: TUserRepositoryFindById) {
    const [user] = await db
      .select({
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        displayName: users.displayName,
        birthDate: users.birthDate,
        email: users.email,
        role: users.role,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt
      })
      .from(users)
      .where(eq(users.id, id));

    return user || null;
  },

  async create({ db, schema: users, body: data }: TUserRepositoryCreate) {
    const now = new Date();
    const createdAt = now.toISOString();
    const updatedAt = now.toISOString();

    const [user] = await db
      .insert(users)
      .values({ ...data, createdAt, updatedAt })
      .returning({
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        displayName: users.displayName,
        birthDate: users.birthDate,
        email: users.email,
        role: users.role,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt
      });

    return user;
  },

  async update({ db, schema: users, params: { id }, body: data }: TUserRepositoryUpdate) {
    const now = new Date();
    const updatedAt = now.toISOString();

    const [user] = await db
      .update(users)
      .set({ ...data, updatedAt })
      .where(eq(users.id, id))
      .returning({
        id: users.id,
        firstName: users.firstName,
        lastName: users.lastName,
        displayName: users.displayName,
        birthDate: users.birthDate,
        email: users.email,
        role: users.role,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt
      });

    return user;
  }
};
