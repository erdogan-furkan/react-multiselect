import classes from "./styles.module.scss";
import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input: FC<Props> = ({icon, ...props}) => {
  return (
    <div className={classes.wrapper}>
      <input {...props} className={`${props.className} ${classes.input}`} />
      <span className={classes.icon}>
        {icon}
      </span>
    </div>
  );
};

export default Input;
