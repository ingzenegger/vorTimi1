type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email";
  placeholder?: string;
};

export default function MyInput({
  value,
  onChange,
  placeholder = "type...",
  type = "text",
}: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
    //e.target.value
  }

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
    />
  );
}
