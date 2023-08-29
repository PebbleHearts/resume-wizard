import { FC } from "react";

import './styles.css';

type ComponentWrapperProps = {
  children: React.ReactNode;
  id: string;
  isSelected: boolean;
  handleClick: (id: string) => void;
};

const ComponentWrapper: FC<ComponentWrapperProps> = ({ children, id, isSelected, handleClick }) => {
  return (
    <div className='component-wrapper' onClick={() => {console.log('clicking me'); handleClick(id)}}>
      {children}
    </div>
  );
};

export default ComponentWrapper;
