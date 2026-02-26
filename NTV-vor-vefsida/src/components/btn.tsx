type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
};

export default function Btn({ onClick, text = "Submit" }): Props {
  return <button onClick={onClick}>{text}</button>;
}
