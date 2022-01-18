import UserService from "../services/userService.js";
import userService from "../services/userService.js";

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const {userId}=req.params;
            const user = await userService.getOne(userId);
            console.log(req.params)
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const user = req.body;
            if (!user._id) {
                res.status(400).json('Invalid ID');
            }
            const updatedUser = await UserService.update(user);
            return res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const {userId} = req.params;
            if (!userId) {
                res.status(400).json('Invalid user ID');
            }
            const userDelete = await UserService.delete(userId);
            return res.json(userDelete);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();