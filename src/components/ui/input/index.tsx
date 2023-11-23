import classes from "./styles.module.scss";
import { InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>(({ icon, ...props }, ref) => {
  return (
    <div className={classes.wrapper}>
      <input
        ref={ref}
        {...props}
        className={`${props.className} ${classes.input}`}
      />
      <span className={classes.icon}>{icon}</span>
    </div>
  );
});

export default Input;
