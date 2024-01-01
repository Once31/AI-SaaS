import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="h-10 w-10 relative animate-spin">
        <Image fill alt="Logo" src={"/logo.png"} />
      </div>
      <p className="text-muted-foreground text-sm">Once is thinking...</p>
    </div>
  );
};
