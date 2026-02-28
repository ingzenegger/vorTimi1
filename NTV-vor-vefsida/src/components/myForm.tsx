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

NEXT STEP:
Use MyInput instead of input, then look into Shadcn input
*/

import { Card } from "./ui/card";

export default function MyForm() {
  return (
    <Card>
      <form>
        <label>
          First name:
          <input type="text" />
        </label>
        <label>
          Last name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Mobile number:
          <input type="number" />
        </label>
        <label>
          Radio:
          <input type="radio" id="value" name="value" />
          {/* add more radio options */}
        </label>
      </form>
    </Card>
  );
}
