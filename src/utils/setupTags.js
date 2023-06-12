const setupTags = (recipes) => {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags.hasOwnProperty(tag)) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  return allTags;
};

export default setupTags;
