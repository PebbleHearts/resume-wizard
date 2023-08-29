import { Portal } from "..";

import './styles.css';

type SelectItemModalProps = {
    onClose: () => void;
    onItemSelection: (itemType: string) => void;
};

const ItemTypes = [
    {
        type: 'header',
        label: 'Header'
    },
    {
        type: 'subHeading',
        label: 'Sub Heading'
    },
    {
        type: 'list',
        label: 'List'
    }
];

const SelectItemModal = ({ onClose, onItemSelection }: SelectItemModalProps) => {
    return (
        <Portal onClose={onClose}>
            {ItemTypes.map((item) => {
              return (
                <div key={item.type} onClick={() => onItemSelection(item.type)} className="selectItem">
                  {item.label}
                </div>
              )
            })}
        </Portal>
    );
};

export default SelectItemModal;
