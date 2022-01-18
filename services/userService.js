import User from "../models/user.js";

class UserService {
    async create(user) {
        const createdUser = await User.create(user);
        return createdUser;
    }

    async getAll() {
        const users = await User.find();
        return users;
    }

    async getOne(userId) {
        if(!userId){
            throw new Error('Invalid ID')
        }
        const user = await User.findById(userId);
        return user;
    }

    async update(user) {
        if(!user._id){
            throw  new Error('Invalid ID')
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new:true});
        return updatedUser;
    }

    async delete(userId) {
        if(!userId){
            throw new Error('Invalid ID')
        }
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    }
}

export default new UserService();