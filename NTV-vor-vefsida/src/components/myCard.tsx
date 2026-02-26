import { useState } from "react";
import Input from "./input.tsx";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";

export default function MyCard() {
  const [input, setInput] = useState("some input here");
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>MyCard Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action </CardAction>
      </CardHeader>
      <CardContent>
        <Input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        ></Input>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
