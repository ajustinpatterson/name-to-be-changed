export interface CreateUserInput {
  email: string
  familyName: string
  givenName: string
  googleId: string
  imageUrl: string
  name: string
};

export interface UpdateUserInput {
  id: string
  email?: string
  familyName?: string
  givenName?: string
  googleId?: string
  imageUrl?: string
  name?: string
  bio?: string
  avatar?: string
  status?: string
};

export interface MutationCreateUser {
  userDetails: CreateUserInput
}

export interface MutationDeleteUser {
  id: string
}

export interface MutationUpdateUser {
  userDetails: UpdateUserInput
}