export default (context, inject) => {
  inject("hello", message => console.log(message));
};
