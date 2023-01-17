module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('user', [
          {
              name: 'Martin',
              surname: 
              email: "martin@gmail.com",
              age: new Date("09-10-1995"),
              phoneNumber: '+34689654301'
              isAdmin: false,
              password: "libnub1290pUU",
              subscribed: true,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              name: "Sara",
              email: "Sara32@gmail.com",
              isAdmin: false,
              password: "Spain3420PPl",
              dateBirth: new Date("02-20-1986"),
              subscribed: true,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              name: "Jose",
              email: "josejg@gmail.com",
              isAdmin: false,
              password: "RickyMorty2222",
              dateBirth: new Date("11-22-1991"),
              subscribed: true,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              name: "Marta",
              email: "martaat@gmail.com",
              isAdmin: true,
              password: "Logan3110",
              dateBirth: new Date("10-31-1992"),
              subscribed: true,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
      ]);
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete("user", null, {});
  },
};
