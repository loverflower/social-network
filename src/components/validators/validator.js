const requiredField = (maxSize) => (value) => {
  console.log(`eeeee`);
  console.log(value);
  return value && value.length > maxSize
    ? `size should be less ${maxSize}`
    : undefined;
};

export const requireSize = requiredField(15);
