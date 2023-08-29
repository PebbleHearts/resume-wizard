import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import './styles.css'

type PortalProps = {
  children: ReactNode;
  onClose: () => void;
}

const Portal = ({ children, onClose }: PortalProps) => {
  return createPortal(
    <div className='portalContainer'>
      <div className='portalWrapper'>
        <div onClick={onClose} className='portalCloseButton'>
          <p>X</p>
        </div>
        <div className='portalHeaderSection'>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Portal;