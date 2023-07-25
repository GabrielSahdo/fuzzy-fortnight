import { User, UserRequest } from "./user.model";

const users: User[] = [];

export const getById = (id: Number) => {
    const user = users.find(u => u.id === id);

    if (!user) {
        throw Error("User Not Found");
    }

    return user;
}

export const getAll = () => {
    return { users };
}

export const create = (userRequest: UserRequest) => {
    const newUser = {
        id: users.length + 1,
        name: userRequest.name,
        email: userRequest.email,
    };

    users.push(newUser);

    return newUser;
}

export const update = (id: Number, user: UserRequest) => {
    const index = users.findIndex(u => u.id === id);

    if (index < 0) {
        throw Error("User Not Found");
    }

    users[index] = {
        ...users[index],
        ...user,
    };

    return users[index];
}