import { Card, CardContent } from "@/shared/components/ui/card";
import { Field, FieldGroup } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../../../shared/hooks/useDebounce";
import type { FormValuesType } from "../types/user";
import MyFormHeader from "./myFormHeader";
import MyFormSelect from "./myFormSelect";
import MyFormInput from "./myFormInput";

const INITIAL_VALUES: FormValuesType = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  selected: "",
  radioButton: "false",
};

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [values, setValues] = useState<FormValuesType>(INITIAL_VALUES);

  const goatItems = [
    { label: "Life of Brian", value: "brian" },
    { label: "Blackadder Season 3", value: "blackadder" },
    { label: "Robin Hood: Men in Tights", value: "robin" },
    { label: "Spaceballs", value: "spaceballs" },
    { label: "Ghostbusters", value: "ghostbusters" },
  ];

  const onInputChange = useCallback(
    (key: keyof FormValuesType, value: string) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  // the debouncing (aka waiting for user to stop typing)
  const debouncedValues = useDebounce(JSON.stringify(values), 1000);
  const debouncedEmail = useDebounce(email, 1000);

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
        window.alert(`Welcome back ${parsedLocalStorageValue.firstName}`);
        loadEmailRef.current.value = "";
        setValues(parsedLocalStorageValue);
      } else {
        window.alert("Email not found");
      }
    } else {
      window.alert("Some bug was found!");
    }
  }, []);

  const onClear = () => {
    setValues(INITIAL_VALUES);
  };

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
      <Card className="bg-indigo-950">
        <MyFormHeader title="Example" />
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <FieldGroup>
              <MyFormInput
                id="email"
                type="email"
                placeholder="Email"
                // ref={loadEmailRef}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MyFormInput
                id="firstName"
                placeholder="First name"
                // TODO: Set values to all input fields in the form
                value={values.firstName}
                onChange={(e) => onInputChange("firstName", e.target.value)}
              />

              <MyFormInput
                id="lastName"
                placeholder="Last name"
                value={values.lastName}
                onChange={(e) => onInputChange("lastName", e.target.value)}
              />

              <MyFormInput
                type="number"
                id="mobilenumber"
                placeholder="Mobile number"
                value={values.mobileNumber}
                onChange={(e) => onInputChange("mobileNumber", e.target.value)}
              />

              <MyFormSelect
                onValueChange={(value) => onInputChange("selected", value)}
                items={goatItems}
              />

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
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <Card>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoad();
          }}
        >
          <Field>
            <Input
              className="bg-white"
              id="email"
              type="email"
              ref={loadEmailRef}
              placeholder="email"
            />
          </Field>

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
              type="reset"
              className="bg-green-500 p-4 roudned text-white uppercase"
              onClick={onClear}
            >
              Create new
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
