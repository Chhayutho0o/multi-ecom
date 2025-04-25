import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const variants = [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
    "elevated",
  ] as const;
  return (
    <div className="flex p-20 flex-col gap-6">
      <div className="flex gap-2">
        {variants.map((variant) => (
          <Button className="capitalize" key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <Input placeholder="Type your message here." />
      <Progress value={33} />
      <Textarea placeholder="Type your message here." />
      <Checkbox />
    </div>
  );
}
