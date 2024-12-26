import { FunctionComponent } from "react";

export type Button01CTA01PrymaryType = {
  className?: string;

  /** Variant props */
  iconLeft?: boolean;
  iconRight?: boolean;
  size?: string;
  state?: string;
};

const Button01CTA01Prymary: FunctionComponent<Button01CTA01PrymaryType> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  size = "Medium",
  state = "Default",
}) => {
  return (
    <div
      className={`self-stretch rounded-lg bg-lightseagreen-100 flex flex-row items-center justify-center py-[12.5px] px-4 text-left text-base text-white font-nunito ${className}`}
      data-iconLeft={iconLeft}
      data-iconRight={iconRight}
      data-size={size}
      data-state={state}
    >
      <div className="relative font-extrabold">Iniciar sesión</div>
    </div>
  );
};

export default Button01CTA01Prymary;
