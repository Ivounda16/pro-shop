import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Petit Mboumba',
        email: 'mboumba@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Pinocchio',
        email: 'pinocchio@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users