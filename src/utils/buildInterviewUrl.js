import slugify from 'slugify';

// we slugify the URL => we remove spaces and we specify
// in paramater that we want to use only lowercase letters
export const slugifyAuthor = (author) => {
  const modifiedAuthor = author.replace('_', '-').replace('&', '');

  return (slugify(modifiedAuthor, {
    lower: true,
  }));
};

// we export the slugified URL so that the CardRecipe component can retrieve it
export const buildInterviewUrl = (author) => `/interviews/${slugifyAuthor(author)}`;