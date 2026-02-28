import { useState } from "react";
import MyInput from "./myInput.tsx";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";
import MyButton from "./myButton.tsx";

export default function MyCard() {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");

  const onClick = () => {
    alert(`Submitted name: ${myName} and email: ${email}`);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>MyCard Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>
          <MyButton onClick={onClick} value="Buy now" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <MyInput
          value={myName}
          placeholder="Type your name"
          onChange={(e) => setMyName(e.target.value)}
        />
        <MyInput
          value={email}
          placeholder="Type your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
