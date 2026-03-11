//practicing breaking down components...
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
type selectProps = {
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
};

export default function MyFormSelect({ onValueChange, items }: selectProps) {
  return (
    <>
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>The GOAT?</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.label}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
