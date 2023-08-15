const techList = (tech, name) => {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  const sortTech = tech.sort();
  const techNames = sortTech.map((tech) => ({tech, name}));
  return techNames;
};

module.exports = techList;