type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
};

export default function MyButton({ value = "Submit", ...props }: ButtonProps) {
  return <button {...props}>{value}</button>;
}
