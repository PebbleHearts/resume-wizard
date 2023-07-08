import { FC } from "react";

import './styles.css';

type ComponentWrapperProps = {
  children: React.ReactNode;
  id: string;
  isSelected: boolean;
  handleClick: (id: string) => void;
};

const ComponentWrapper: FC<ComponentWrapperProps> = ({ children, id, isSelected, handleClick }) => {
  console.log({id, isSelected})
  return (
    <div className='component-wrapper' onClick={() => {console.log('clicking me'); handleClick(id)}}>
      {children}
      {isSelected && (
        <div className='quick-actions-menu'>
          <button style={{ width: '100px' }}>Click-me</button>
        </div>
      )}
    </div>
  );
};

export default ComponentWrapper;
