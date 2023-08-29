import { FC } from "react";

import ComponentWrapper from "../component-wrapper/ComponentWrapper";

import "./styles.css";

type ListProps = {
  componentSkelton: {
    id: string;
    header: string;
    items: string[]
  }
  currentSelectedId: string;
  handleClick: (id: string) => void;
};

const List: FC<ListProps> = ({
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
      <div className="listHeading">
        {componentSkelton.header}
        <ul className="list">

          {componentSkelton.items?.map((item) => {
            return <li className="listItem">{item}</li>
          })}
        </ul>
      </div>
    </ComponentWrapper>
  );
};

export default List;
