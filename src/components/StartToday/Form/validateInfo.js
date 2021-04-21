export default function validateInfo(values) {
  let errors = {};
  console.log(values);
  if (!values.carModel) {
    console.log("!!!!");
    errors.carModel = "Please select a car brand";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.phone) {
    errors.phone = true;
  }
  if (!values.name) {
    errors.name = true;
  }
  if (!values.name && !values.phone && !values.carModel) {
    errors.allRequired = "* All fields are required to be filled";
  }
  return errors;
}
