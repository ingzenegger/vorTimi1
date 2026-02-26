export default function Input({
  value,
  onChange,
  placeholder,
  type,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
}) {
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
