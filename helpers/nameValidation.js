/***
 * @param name is a propos where the user puts his name in it.
 * if the name is emty then it will return false
 * if the name is not emty then , we can use regex for get the actual name looks like
 */
function nameValidation(name) {
  if (!name) {
    return false;
  }

  let pattern = /^[a-zA-Z ]+$/;
  let result = pattern.test(name);

  if (!result) {
    return false;
  }

  return true;
}

module.exports = nameValidation;
