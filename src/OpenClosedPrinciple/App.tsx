// Una entidad de software debe estar abierta para su extensión, pero cerrada para su modificación.

import { FC } from "react";
import { TitleProps, TitleWithLinkProps, TitleWithButtonProps } from "./types";

// El componente Title, está abierto a su extensión y cerrado a su modificación.
// Dado que tiene un "children" por props, éste puede renderizar desde un simple botón hasta una estructura HTML bastante grande, es decir, está abierto a su extensión.
// Sin embargo, lo que vaya a renderizar en "children" no puede ser modificado desde el componente Title.
const Title: FC<TitleProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col w-fit">
      <h1 className="text-2xl">{title}</h1>
      {children}
    </div>
  );
};

export const TitleWithLink: FC<TitleWithLinkProps> = ({
  title,
  href,
  buttonText,
}) => {
  return (
    <Title title={title}>
      <div className="border-2 border-orange-500 rounded-md w-fit h-fit hover:text-white hover:bg-orange-400">
        <a href={href} target="_blank" className="w-full h-full py-px px-4">
          {buttonText}
        </a>
      </div>
    </Title>
  );
};

export const TitleWithButton: FC<TitleWithButtonProps> = ({
  title,
  buttonText,
  onClick,
}) => {
  return (
    <Title title={title}>
      <button
        onClick={onClick}
        className="border-2 border-orange-500 rounded-md w-fit h-fit hover:text-white hover:bg-orange-400 py-px px-4"
      >
        {buttonText}
      </button>
    </Title>
  );
};

export default function App() {
  return (
    <>
      <TitleWithLink
        title="Title With Link"
        href="https://www.google.com"
        buttonText="Go to Google"
      />
      <hr />
      <hr />
      <hr />
      <hr />
      <TitleWithButton
        title="Title With Button"
        buttonText="Alert Message"
        onClick={() => {
          alert("Button clicked");
        }}
      />
    </>
  );
}
