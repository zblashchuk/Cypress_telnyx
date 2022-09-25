import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
function generateUser(){
  const randomNumber = Math.random().toString().slice(2, 6)
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const empty = ''
  const email = `${firstName + randomNumber}@gmail.com`
  const password = "1A*" + Math.random().toString(36).slice(-9)
  const mobile = faker.phone.number('##########')
  const reasonForContact = ['Support', 'Legal', 'Sales Inquiry',];
  let rand = Math.floor(Math.random() * reasonForContact.length);
  const randReasonForContact = (reasonForContact[rand])
 
  const adress = faker.address.streetAddress()
 
  return {email, firstName, lastName, mobile, empty, password, randReasonForContact};
}
module.exports = {generateUser};