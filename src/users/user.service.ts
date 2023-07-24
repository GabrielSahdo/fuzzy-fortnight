interface IUser {
    id: number;
    name: string;
    email: string;
}

const users: IUser[] = [];

export const getById = (id: Number) => {
    const user = users.find(u => u.id === id);

    if (!user) {
        throw Error('User Not Found')
    }

    return user;
}

export const getAll = () => {
    return { users };
}

export const create = (user: any) => {
    const newUser = {
        ...user,
        id: users.length + 1,
    };

    users.push(newUser);

    return newUser;
}

export const update = (id: number, user: any) => {
    const index = users.findIndex(u => u.id === id);

    if (index < 0) {
        throw Error('User Not Found')
    }

    users[index] = {
        ...users[index],
        ...user,
    };

    return users[index];
}