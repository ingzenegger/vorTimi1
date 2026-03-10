type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
};

export default function MyButton({ value = "Submit", ...props }: ButtonProps) {
  return (
    <button className="my-btn" {...props}>
      {value}
    </button>
  );
}
