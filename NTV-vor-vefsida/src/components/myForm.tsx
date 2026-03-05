import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRef } from "react";

export default function MyForm() {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const mobileNumber = useRef(0);
  const selected = useRef("");
  const approve = useRef(true);
  const items = [
    { label: "Life of Brian", value: "brian" },
    { label: "Blackadder Season 3", value: "blackadder" },
    { label: "Robin Hood: Men in Tights", value: "robin" },
    { label: "Spaceballs", value: "spaceballs" },
    { label: "Ghostbusters", value: "ghostbusters" },
  ];

  const onSubmit = () => {
    alert(
      approve
        ? `Hello ${firstName.current} ${lastName.current}, your email(${email.current}) and mobile number (${mobileNumber.current}) have now been added to a random trivia mailing list relating to ${selected.current}. `
        : `Hello ${firstName.current} ${lastName.current}, by choosing "no" you have opted out of recieving random trivia to your email (${email.current}) and mobile number (${mobileNumber.current}) relating to ${selected.current}. `,
    );
  };

  const resetValues = () => {
    //this function is not really necessary as the button refreshes the page out of the box
    //can use event.preventDefault() to override the out of the box functionality, but then would need to have an action that resets my placeholders, easy to manipulate with the string inputs, we would just set the placeholder for example for first name as {firstname.current} and declare it in the beginning as useRef("First name"), but with the mobile number and select we start having some more complicated issues I'm not ready to deal with... - other solutions would be to have no placeholders and use the labels instead to identify eact input, but that is not the look of the form we are copying here. ;
    //If i just needed to reset the values of Ref however this would do it:
    firstName.current = "";
    lastName.current = "";
    email.current = "";
    mobileNumber.current = 0;
    selected.current = "";
    approve.current = true;
  };

  return (
    <div className="w-full max-w-md">
      <Card className="bg-indigo-950">
        <CardHeader>
          <div className="flex gap-2 items-center">
            <div className="w-full h-px bg-sky-500 my-4 "></div>
            <CardTitle className="text-white">Example</CardTitle>
            <div className="w-full h-px bg-sky-500 my-4 "></div>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                {/* <FieldLabel>First name:</FieldLabel> */}
                <Input
                  className="bg-white"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => (firstName.current = e.target.value)}
                />
              </Field>
              <Field>
                {/* <FieldLabel>Last name:</FieldLabel> */}
                <Input
                  className="bg-white"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => (lastName.current = e.target.value)}
                />
              </Field>
              <Field>
                {/* <FieldLabel>Email:</FieldLabel> */}
                <Input
                  className="bg-white"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => (email.current = e.target.value)}
                />
              </Field>
              <Field>
                {/* <FieldLabel>Mobile number:</FieldLabel> */}
                <Input
                  className="bg-white"
                  type="number"
                  placeholder="Mobile number"
                  onChange={(e) =>
                    (mobileNumber.current = Number(e.target.value))
                  }
                />
              </Field>
              <Select onValueChange={(value) => (selected.current = value)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>The GOAT?</SelectLabel>
                    {items.map((item) => (
                      <SelectItem key={item.value} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <RadioGroup
                className="flex text-white"
                onValueChange={(value) => (approve.current = value === "true")}
                value={approve.toString()}
              >
                <div className="flex items-center gap-3">
                  <Label htmlFor="option-one">Yes</Label>
                  <RadioGroupItem
                    value="true"
                    id="option-one"
                    className="bg-white"
                  ></RadioGroupItem>
                </div>
                <div className="flex items-center gap-3">
                  <Label htmlFor="option-two">No</Label>
                  <RadioGroupItem
                    className="bg-white"
                    value="false"
                    id="option-two"
                  ></RadioGroupItem>
                </div>
              </RadioGroup>
              <Button
                onClick={onSubmit}
                className="w-full bg-pink-600 text-white border border-black"
              >
                SUBMIT
              </Button>
              <div className="flex gap-2 items-center">
                <div className="w-full h-px bg-sky-500 my-4 "></div>
                <p className="text-xs text-white">OR</p>
                <div className="w-full h-px bg-sky-500 my-4 "></div>
              </div>
              <Button
                className="w-full border border-pink-600"
                onClick={resetValues}
              >
                CLEAR
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
