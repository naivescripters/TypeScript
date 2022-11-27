enum ROLES {
    ADMIN = 'ADMIN',
    AUTHOR = 0,
    GUEST = 10
};

let person = {
    name: 'Hasan',
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: ROLES.ADMIN
};

if(person.role === ROLES.ADMIN) {
    console.log('user is admin');
}