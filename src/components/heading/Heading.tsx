import { FC } from "react";

import ComponentWrapper from "../component-wrapper/ComponentWrapper";

import "./styles.css";

type HeadingProps = {
  componentSkelton: {
    id: string;
    value: string;
  };
  currentSelectedId: string;
  handleClick: (id: string) => void;
};

const Heading: FC<HeadingProps> = ({
  componentSkelton,
  currentSelectedId,
  handleClick,
}) => {
  return (
    <ComponentWrapper
      handleClick={handleClick}
      id={componentSkelton.id}
      isSelected={componentSkelton.id === currentSelectedId}
    >
      <div className="heading">
        {componentSkelton.value}
      </div>
    </ComponentWrapper>
  );
};

export default Heading;
