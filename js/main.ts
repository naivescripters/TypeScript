let person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Hasan',
    age: 27,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};

person.role = [34, 'Hello'];

for(let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}