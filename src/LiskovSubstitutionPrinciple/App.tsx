// Para construir sistemas de software con partes intercambiables, esas partes se deben adherir a un contrato que permita que esas partes puedan ser reemplazadas por otras.

import { FC, ReactNode } from "react";

// El contrato:
type ButtonProps = {
  children: ReactNode;
  style?: string;
  hover?: string;
  size: "xl" | "m";
};

const Button: FC<ButtonProps> = ({ children, style, hover, size }) => {
  return (
    <button style={{ fontSize: size === "xl" ? "32px" : "16px" }} className={`${style} ${hover}`}>
      {children}
    </button>
  );
};

const RedButton: FC<ButtonProps> = ({ children, size }) => (
  <Button size={size} style="border-2 border-red-500 text-black py-px px-4 w-fit" hover="hover:text-white hover:bg-red-400">
    {children}
  </Button>
);

const BlueButton: FC<ButtonProps> = ({ children, size }) => (
  <Button size={size} style="border-2 border-blue-500 text-black py-px px-4 w-fit" hover="hover:text-white hover:bg-blue-400">
    {children}
  </Button>
);

export default function App() {
  return (
    <div className="flex flex-col gap-y-4 w-fit">
      <RedButton size="xl">Red Button, size = xl</RedButton>
      <BlueButton size="m">Blue Button, size = m</BlueButton>
    </div>
  );
}
