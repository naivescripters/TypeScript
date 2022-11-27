let person = {
    name: 'Leela',
    age: 31,
    hobbies: ['sports', 'cooking']
};

let favorites: string[];

favorites = ['animals']; 

for(let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}