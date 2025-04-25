import { Button } from "@/components/ui/button";

export default function Home() {
  const variants = [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
  ] as const;
  return (
    <div className="flex gap-2 p-20">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
}
