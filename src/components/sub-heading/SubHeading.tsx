import { FC } from "react";

import ComponentWrapper from "../component-wrapper/ComponentWrapper";

import './styles.css';

type SubHeadingProps = {
  componentSkelton: {
    id: string;
    value: string;
  };
  currentSelectedId: string;
  handleClick: (id: string) => void;
};

const SubHeading: FC<SubHeadingProps> = ({
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
      <div className='sub-heading'>
      {componentSkelton.value}
      </div>
    </ComponentWrapper>
  );
};

export default SubHeading;
