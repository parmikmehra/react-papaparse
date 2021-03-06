import React from 'react';
interface Props {
    children: any;
    onDrop?: (data: any, file?: any) => void;
    onFileLoad?: (data: any, file?: any) => void;
    onError?: (err: any, file: any, inputElem: any, reason: any) => void;
    config?: any;
    style?: any;
    noClick?: boolean;
    noDrag?: boolean;
    progressBarColor?: string;
    addRemoveButton?: boolean;
    onRemoveFile?: (data: any) => void;
    noProgressBar?: boolean;
    removeButtonColor?: string;
}
interface State {
    dropAreaCustom: any;
    progressBar: number;
    displayProgressBarStatus: string;
    file: any;
    timeout: any;
    files: any;
    removeIconColor: string;
    isCanceled: boolean;
}
export default class CSVReader extends React.Component<Props, State> {
    inputFileRef: any;
    dropAreaRef: any;
    fileSizeInfoRef: any;
    fileNameInfoRef: any;
    REMOVE_ICON_COLOR: any;
    REMOVE_ICON_COLOR_LIGHT: string;
    state: State;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    preventDefaults: (e: any) => void;
    highlight: () => void;
    unhighlight: () => void;
    visibleProgressBar: () => void;
    handleDrop: (e: any) => void;
    handleFiles: () => void;
    uploadFile: (file: any) => void;
    displayFileInfo: (file: any) => void;
    disableProgressBar: () => void;
    childrenIsFunction: () => boolean;
    fileChange: (e: any) => void;
    open: (e: any) => void;
    renderChildren: () => any;
    removeFile: (e: any) => void;
    changeRemoveIconColor: (color: string) => void;
    renderDropFileRemoveButton: () => JSX.Element | null;
    render(): JSX.Element;
}
export {};
