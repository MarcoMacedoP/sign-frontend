const FormData = require("form-data");

/**Converts an Javascript Object to FormData object
 *
 * @param {*} object the object to be converted
 * @returns a FormData object
 */
function convertToFormData(object) {
  const formData = new FormData();
  Object.keys(object).map(key => formData.append(key, object[key]));
  return formData;
}

module.exports = convertToFormData;
