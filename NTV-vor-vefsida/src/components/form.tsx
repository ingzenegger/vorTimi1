/* Form
 //props? {type, placeholder}:{type:'string', placeholder:}
name first
name last
email
phonenumber
radio yes no
additional preference checkboxes
appointment date selector
number of guests w +- buttons
leave a message text area
submit button
edit button

start with basic, then work from there
*/

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Mobile number" />
      <input type="radio" id="value" name="value" />
      <input type="submit" />
    </form>
  );
}
