import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Field, FieldGroup } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { useState } from "react";

export default function MyGOATForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);
  const [selected, setSelected] = useState("");
  const [approve, setApprove] = useState(true);
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
        ? `Hello ${firstName} ${lastName}, your email(${email}) and mobile number (${mobileNumber}) have now been added to a random trivia mailing list relating to ${selected} `
        : `Hello ${firstName} ${lastName}, by choosing "no" you have opted out of recieving random trivia to your email (${email}) and mobile number (${mobileNumber}) relating to ${selected} `,
    );
  };
  //perhaps not necessary as the button automatically refreshes the page...
  const resetStates = () => {
    // event.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber(0);
    setSelected("");
    setApprove(true);
  };

  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>My GOAT Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                {/* <FieldLabel>First name:</FieldLabel> */}
                <Input
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Field>
              <Field>
                {/* <FieldLabel>Last name:</FieldLabel> */}
                <Input
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Field>
              <Field>
                {/* <FieldLabel>Email:</FieldLabel> */}
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                {/* <FieldLabel>Mobile number:</FieldLabel> */}
                <Input
                  type="number"
                  placeholder="Mobile number"
                  onChange={(e) => setMobileNumber(Number(e.target.value))}
                />
              </Field>
              <Select onValueChange={(value) => setSelected(value)}>
                <SelectTrigger className="w-full">
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
                className="flex"
                onValueChange={(value) => setApprove(value === "true")}
                value={approve.toString()}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="true" id="option-one"></RadioGroupItem>
                  <Label htmlFor="option-one">Yes</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="false"
                    id="option-two"
                  ></RadioGroupItem>
                  <Label htmlFor="option-two">No</Label>
                </div>
              </RadioGroup>
              <Button onClick={onSubmit} className="w-full">
                Submit
              </Button>
              <Separator title="or" />
              <Button className="w-full" onClick={resetStates}>
                Clear
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
