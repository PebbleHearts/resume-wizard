import { Portal } from "..";

import './styles.css';

type SelectItemModalProps = {
    pdfString: string;
    onClose: () => void;
};

// component to preview the pdf
const PdfPreviewModal = ({ onClose, pdfString }: SelectItemModalProps) => {
    return (
        <Portal onClose={onClose}>
            <div style={{ width: '100%', height: '80vh', display: "flex", flexWrap: 'wrap' }}>
                <embed type="application/pdf" src={`${pdfString}#toolbar=0`} width="1000" height="800" />
            </div>
        </Portal>
    );
};

export default PdfPreviewModal;
