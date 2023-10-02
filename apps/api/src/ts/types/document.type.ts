export type TTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};

export type TDocument = { id: number } & TTimestamps;
