module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('user', [
            {
                name: 'Martin',
                surname: 'Garcia',
                email: 'martin@gmail.com',
                age: new Date('09-10-1995'),
                phoneNumber: '+34689654301',
                password: 'libnub1290pUU',
                isAdmin: false,
                isOwner: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Carlos',
                surname: 'Aparicio',
                email: 'carlosAp@gmail.com',
                age: new Date('06-12-1990'),
                phoneNumber: '+34689339301',
                password: 'ECpVh7Gah4zjXgWE',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Pedro',
                surname: 'Sarrion',
                email: 'pedroSa@gmail.com',
                age: new Date('10-01-1992'),
                phoneNumber: '+34689875430',
                password: '3M6RPE9jx6PLC7S3',
                isAdmin: false,
                isOwner: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Jose',
                surname: 'Piqueras',
                email: 'JosePiq@gmail.com',
                age: new Date('02-06-2000'),
                phoneNumber: '+34689612301',
                password: 'WA9cHaIwFCwqHNuv',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Alex',
                surname: 'Gonzalez',
                email: 'Alexgg@gmail.com',
                age: new Date('08-28-1999'),
                phoneNumber: '+34682198301',
                password: 'VhHcAK4Zch7CuJxY',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Abel',
                surname: 'Lopez',
                email: 'abelLP@gmail.com',
                age: new Date('02-08-1997'),
                phoneNumber: '+34689654391',
                password: 'dMKwMHCSaYnXzNDa',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Miguel',
                surname: 'Sanchez',
                email: 'miguelSS@gmail.com',
                age: new Date('06-12-1998'),
                phoneNumber: '+34634764301',
                password: '5cLKVWSakGrSkqEf',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Sandro',
                surname: 'Pedron',
                email: 'sandroo@gmail.com',
                age: new Date('10-05-2001'),
                phoneNumber: '+34659824301',
                password: 'z6Mthtbkp34qDGE5',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Luis',
                surname: 'Garcia',
                email: 'LuisGg@gmail.com',
                age: new Date('10-06-1985'),
                phoneNumber: '+34682345601',
                password: '7WuDL4YR9S46ZTeQ',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Hector',
                surname: 'Perez',
                email: 'hectorP@gmail.com',
                age: new Date('12-04-2002'),
                phoneNumber: '+34689789501',
                password: '35aLL5YAFnWVqQJv',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Marta',
                surname: 'Aguilar',
                email: 'martaat@gmail.com',
                age: new Date('10-31-1992'),
                phoneNumber: '+34679798761',
                password: 'Logan3110',
                isAdmin: true,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Maria',
                surname: 'Sampedro',
                email: 'mariaSp@gmail.com',
                age: new Date('03-06-1988'),
                phoneNumber: '+34688723301',
                password: 'YsKbggWkn7SX7zYH',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Carmen',
                surname: 'Simon',
                email: 'carmenSS@gmail.com',
                age: new Date('03-04-1993'),
                phoneNumber: '+34689676121',
                password: 'uTsFtZsdywyEYhgY',
                isAdmin: false,
                isOwner: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Patricia',
                surname: 'Garcia',
                email: 'patgarc@gmail.com',
                age: new Date('03-05-1997'),
                phoneNumber: '+34654544301',
                password: 'eKcgKNu3aQqGmSMX',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Begoña',
                surname: 'Diaz',
                email: 'begodiaz@gmail.com',
                age: new Date('10-22-2003'),
                phoneNumber: '+34689123451',
                password: 'MESsqMGG333BhVVv',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Andrea',
                surname: 'Jimenez',
                email: 'andji@gmail.com',
                age: new Date('09-23-1998'),
                phoneNumber: '+34689234561',
                password: 'tm8eQgT5dPqSUpQa',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Sandra',
                surname: 'Gomez',
                email: 'sandri@gmail.com',
                age: new Date('07-25-2003'),
                phoneNumber: '+34689345671',
                password: 'RCHxZF57hajgZ9vG',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Laura',
                surname: 'Lopez',
                email: 'Laulo@gmail.com',
                age: new Date('06-12-1999'),
                phoneNumber: '+34686789301',
                password: 'cSAMsxTDFFXBzF5w',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Paula',
                surname: 'Moreno',
                email: 'pauMoreno@gmail.com',
                age: new Date('12-07-2000'),
                phoneNumber: '+34689098761',
                password: 't686t7rwjqBBdUGE',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Aina',
                surname: 'Ruiz',
                email: 'ainruiz@gmail.com',
                age: new Date('10-03-1985'),
                phoneNumber: '+34689129851',
                password: 'fqkerzPYs6NCPKLF',
                isAdmin: false,
                isOwner: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('user', null, {});
    },
};