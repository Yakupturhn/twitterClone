import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function Button({
  size,
  children,
  variant,
  className,
  ...props
}) {
  console.log(props, "props");
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-colors ",
        {
          "px-4 h-8 text-sm": size === "small",
          "px-4 h-9": size === "normal",
          "px-4 h-[35px] w-full": size === "large",
          "bg-[#1d9bf0] text-white": variant === "primary",
          "bg-white text-black": variant === "white",
          "bg-black text-white border border-[#536471]":
            variant === "white-outline",
          [className]: true,
        }
      ),
      ...props,
    },

    children
  );
}

Button.PropTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary", "white", "white-outline"]),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: "large",
  variant: "primary",
};
