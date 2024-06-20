type Role = 'ADMIN' | 'USER';

type User = {
  aud: string;
  userId: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  role: Role;
};

export { User };
