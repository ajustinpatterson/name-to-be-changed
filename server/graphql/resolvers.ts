const db = require('../model/db');

const resolvers = {
  Query: {
    async getUsers () {
      const users = await db.User.findAll();
      return users;
    }
  },
  Mutation: {
    async createUser (_: any, { input }: any) {
      const newUser = await db.User.create({
        id: input.id,
        name: input.name,
        email: input.name
      })
      if (newUser) {
        return {
          success: true,
          message: 'User successfully created'
        }
      }
      return newUser;
    },
    async deleteUser (_: any, { email }: any) {
      const user = await db.User.findOne({ email });
      const deletedUser = await user.destroy();
      if (deletedUser) {
        return {
          success: true,
          message: 'User successfully deleted'
        }
      }
    },
    async updateName (_: any, { id, name }: any) {
      const user = await db.User.findOne({ id })
      //arguments passed from client
      user.name = name;
      await user.save();
    }
  }
}

export { resolvers };