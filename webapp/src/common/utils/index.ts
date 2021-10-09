export const handleClassName = (
  ref: any,
  className: string,
  condition: boolean
) => {
  const classes = ref.current!!.className.split(" ");
  if (condition) {
    if (!classes.includes(className)) {
      classes.push(className);
    }
  } else {
    if (classes.includes(className)) {
      classes.splice(classes.indexOf(className), 1);
    }
  }
  ref.current!!.className = classes!!.join(" ");
};
