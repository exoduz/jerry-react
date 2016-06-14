let Validate = {
  /**
   Check if field is not empty
  */
  isRequired: function(value) {
    var ret = true;
    value.length > 0 ? ret = true : ret = !ret;
    return ret;
  },

  /**
   Check if email format
  */
  isEmail: function(value) {
    // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
  }

}

export default Validate;
