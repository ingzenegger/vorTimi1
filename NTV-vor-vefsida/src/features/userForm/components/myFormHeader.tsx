//practicing breaking down components...
import { CardHeader, CardTitle } from "@/shared/components/ui/card";

export default function MyFormHeader({title}: {title:string}) {
  return (
    <CardHeader>
      <div className="flex gap-2 items-center">
        <div className="w-full h-px bg-sky-500 my-4 "></div>
        <CardTitle className="text-white">{title}</CardTitle>
        <div className="w-full h-px bg-sky-500 my-4 "></div>
      </div>
    </CardHeader>
  );
}
