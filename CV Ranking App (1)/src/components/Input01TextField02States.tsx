import { FunctionComponent } from "react";

export type Input01TextField02StatesType = {
  className?: string;
  showIcon?: boolean;
  label?: string;
  text?: string;

  /** Variant props */
  state?: string;
  variant?: string;
};

const Input01TextField02States: FunctionComponent<
  Input01TextField02StatesType
> = ({
  className = "",
  state = "Default",
  variant = "Succes",
  showIcon = true,
  label,
  text,
}) => {
  return (
    <div
      className={`w-[400px] flex flex-col items-start justify-start gap-1 text-left text-sm text-white font-nunito ${className}`}
      data-state={state}
      data-variant={variant}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-1 px-0">
        <div className="relative">{label}</div>
      </div>
      <div className="self-stretch h-11 rounded-lg bg-darkslateblue-100 border-white border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-2 gap-2.5">
        {showIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconsstates.svg"
          />
        )}
        <div className="flex-1 relative">{text}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-1 px-0 font-underline-01-medium-01-14">
        <div className="relative font-medium whitespace-pre-wrap">{`       `}</div>
      </div>
    </div>
  );
};

export default Input01TextField02States;
