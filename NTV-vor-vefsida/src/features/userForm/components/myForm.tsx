///// HÉLT ÉG SKILDI ÞETTA, SKILDI ÞETTA EKKI. REYNDI AÐ FÁ GEMINI TIL AÐ HJÁLPA MÉR AÐ SKILJA ÞETTA, ONLY MADE IT MORE CONFUSING. MY BEST EFFORT WITH LIMITED TIME(helgin var out) - ER ALLT Í RUGLI BUT HAVE RUN OUT OF TIME FOR THIS RN. En ég gerði amk eitthvað af þessu...

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Field, FieldGroup, FieldSet } from "@/shared/components/ui/field";
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
import { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../../../shared/hooks/useDebounce";
import type { FormValuesType } from "../types/user";

const INITIAL_VALUES: FormValuesType = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  selected: "",
  radioButton: "false",
};

export default function MyForm() {
  // my state variables:
  const [email, setEmail] = useState("");
  const [values, setValues] = useState<FormValuesType>(INITIAL_VALUES);
  // const [view, setView] = useState<"entry" | "form">("entry");

  const items = [
    { label: "Life of Brian", value: "brian" },
    { label: "Blackadder Season 3", value: "blackadder" },
    { label: "Robin Hood: Men in Tights", value: "robin" },
    { label: "Spaceballs", value: "spaceballs" },
    { label: "Ghostbusters", value: "ghostbusters" },
  ];

  // // my button functions:
  // const handleCreateNew = () => {
  //   if (!email) return alert("enter email first!");
  //   setValues(INITIAL_VALUES);
  //   setView("form");
  // };

  // const handleLoad = () => {
  //   if (!email) return alert("Enter email first!");
  //   const savedData = localStorage.getItem(email);

  //   if (savedData) {
  //     setValues(JSON.parse(savedData));
  //   } else {
  //     alert("No data found for this email. Starting fresh!");
  //     setValues(INITIAL_VALUES);
  //   }
  //   setView("form");
  // };

  const onInputChange = useCallback(
    (key: keyof FormValuesType, value: string) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  // the debouncing (aka waiting for user to stop typing)
  const debouncedValues = useDebounce(JSON.stringify(values), 1000);
  const debouncedEmail = useDebounce(email, 1000);

  // useEffect(() => {
  //   if (view === "form" && email) {
  //     localStorage.setItem(email, JSON.stringify(debouncedValues));
  //     console.log("saved to localStorage for:", email);
  //   }
  // }, [debouncedValues, debouncedEmail, view]);

  const onSubmit = () => {
    const { firstName } = values;
    if (!email) return alert("Email is required!");
    localStorage.setItem(email, JSON.stringify(values));
    window.alert(
      `Hello ${firstName}, your info has been stored linked to your email address ${email}`,
    );
  };
  const loadEmailRef = useRef<HTMLInputElement>(null);

  const onLoad = useCallback(() => {
    if (loadEmailRef.current && loadEmailRef.current.value) {
      const localStorageValue = localStorage.getItem(
        loadEmailRef.current?.value,
      );
      if (localStorageValue) {
        const parsedLocalStorageValue: FormValuesType =
          JSON.parse(localStorageValue);
        window.alert(parsedLocalStorageValue.firstName);
        loadEmailRef.current.value = "";
        setValues(parsedLocalStorageValue);
      } else {
        window.alert("Email not found");
      }
    } else {
      window.alert("Some bug was found!");
    }
  }, []);

  useEffect(() => {
    if (email && debouncedValues) {
      localStorage.setItem(email, debouncedValues);
      console.log("Auto-saved to localStorage");
    }
  }, [debouncedValues, debouncedEmail]);
  // TODO: Write useEffect to repopulate the localstorage after debounce
  // NOTE: The email has to be present for this to work

  // TODO: If no email is provided, display only the email input, or some other alternative UX

  return (
    <div className="w-full max-w-md">
      {/* {view === "entry" ? (
        //screen one, returning just the email input
      <div>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={handleLoad}>Load</Button>
        <Button onClick={handleCreateNew}>Create New</Button>
      </div>
       ) : (
        //screen two, returning the actual form */}

      <Card className="bg-indigo-950">
        <CardHeader>
          <div className="flex gap-2 items-center">
            <div className="w-full h-px bg-sky-500 my-4 "></div>
            <CardTitle className="text-white">Example</CardTitle>
            <div className="w-full h-px bg-sky-500 my-4 "></div>
          </div>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <Input
                className="bg-white"
                id="email"
                type="email"
                placeholder="Email"
                ref={loadEmailRef}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <Field>
                <Input
                  className="bg-white"
                  id="firstName"
                  placeholder="First name"
                  // TODO: Set values to all input fields in the form
                  value={values.firstName}
                  onChange={(e) => onInputChange("firstName", e.target.value)}
                />
              </Field>
              <Field>
                <Input
                  className="bg-white"
                  id="lastName"
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={(e) => onInputChange("lastName", e.target.value)}
                />
              </Field>
              <Field>
                <Input
                  className="bg-white"
                  type="number"
                  placeholder="Mobile number"
                  value={values.mobileNumber}
                  onChange={(e) =>
                    onInputChange("mobileNumber", e.target.value)
                  }
                />
              </Field>
              <Select
                onValueChange={(value) => onInputChange("selected", value)}
              >
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
                onValueChange={(value) => onInputChange("radioButton", value)}
                value={values.radioButton ?? "false"}
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
                value="load"
                type="submit"
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
                // onClick={resetValues}
              >
                CLEAR
              </Button>
            </form>

            <Card>
              <CardHeader>
                <CardTitle>Please enter email address</CardTitle>
              </CardHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onLoad();
                }}
              >
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <Input
                        className="bg-white"
                        id="email"
                        type="email"
                        ref={loadEmailRef}
                        placeholder="email"
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <div>
                  <Button
                    value="load"
                    type="submit"
                    className="bg-green-500 p-4 roudned text-white uppercase"
                  >
                    Load
                  </Button>
                  <Button
                    value="create new"
                    type="submit"
                    className="bg-green-500 p-4 roudned text-white uppercase"
                  >
                    Create new
                  </Button>
                </div>
              </form>
            </Card>
          </FieldGroup>
        </CardContent>
      </Card>
      {/* )} */}
    </div>
  );
}
