import React, { useState } from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import TitleBar from "../components/TitleBar";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
    isInstallAvailable: boolean,
    deferredPrompt: { prompt: () => void; },
    isUpdateAvailable: boolean,
}

const BulletinScreen: React.FC<Props> = ({isInstallAvailable, deferredPrompt, isUpdateAvailable}) => {
    const [numPages, setNumPages] = useState(0);

    return (
        <>
            <TitleBar 
                isInstallAvailable={isInstallAvailable} 
                isUpdateAvailable={isUpdateAvailable} 
                deferredPrompt={deferredPrompt} 
                backEnabled={true}
                title="Bulletin" />
            <div style={{width: "100%"}}>
                <Document
                    file={`${process.env.REACT_APP_BACKEND_URL}/bulletin`}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                    {
                        Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map(page => <Page pageNumber={page} key={page} renderTextLayer={false} renderInteractiveForms={false} renderAnnotationLayer={false}/>)
                    }
                </Document>
            </div>
        </>
    );
}

export default BulletinScreen;