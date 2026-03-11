//practicing breaking down components...
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

type inputProps = {
  id: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MyFormInput({
  id,
  type,
  placeholder,
  onChange,
}: inputProps) {
  return (
    <Field>
      <Input
        className="bg-white"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Field>
  );
}
