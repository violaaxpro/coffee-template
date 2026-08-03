import { Button, ButtonProps } from "antd";

type ButtonTypes = {
  label?: string;
  icon?: any;
} & ButtonProps;
const index = ({ label, icon, ...props }: ButtonTypes) => {
  return (
    <div>
      <Button {...props}>
        {label && <span>{label}</span>}
        {icon && <span>{icon}</span>}
      </Button>
    </div>
  );
};

export default index;
