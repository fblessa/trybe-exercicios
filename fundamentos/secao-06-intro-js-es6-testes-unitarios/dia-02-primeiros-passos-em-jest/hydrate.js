const hydrate = (drinkString) => {
  const drinkArray = drinkString.split(' ');
  const totalCups = drinkArray.reduce((total, drink) => {
    const parsedDrink = parseInt(drink, 10);
    if (!isNaN(parsedDrink)) {
      total += parsedDrink;
    }
    return total;
  }, 0);

  return `${totalCups} copo${totalCups === 1 ? '' : 's'} de água`;
};

module.exports = hydrate;