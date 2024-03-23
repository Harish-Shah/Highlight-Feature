import React, { useState } from 'react';
import { HighlightableTextArea } from 'react-highlight-popover';
import Highlighter from 'react-highlight-words';

function FloatingWindow() {
    const [highlightedText, setHighlightedText] = useState('');
    const [highlightRange, setHighlightRange] = useState({ startIndex: 0, endIndex: 0 });
    const [isToolbarVisible, setIsToolbarVisible] = useState(false);

    const handleClearHighlight = () => {
        console.log("OnClear Triggered");
        setHighlightedText('');
        setIsToolbarVisible(false);
    };

    const handleHighlightOption = (highlightedText) => {
        setIsToolbarVisible(!isToolbarVisible);

        const highlightedElement = document.createElement('span');
        highlightedElement.classList.add('highlighted-text');
        // highlightedElement.style.backgroundColor = '#D2E7D1';
        highlightedElement.style.backgroundColor = 'yellow';
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        setHighlightRange({
            startIndex: range.startOffset,
            endIndex: range.endOffset,
        });
        range.surroundContents(highlightedElement);
        console.log("highlightedText ===>", highlightedText)
        console.log("highlightRange ===>", highlightRange)
    };

    const handleAddNoteOption = () => {
        console.log('handleAddNoteOption called');
    };

    const ToolBar = ({ highlightedText, setPopoverState }) => {
        return (
            <>
                <div className='toolbar-container'
                    style={{ display: "inline-block" }}>
                    <div style={{
                        padding: "0xp 12px 0px 10px",
                        display: "inline-block",
                    }}>
                        <div className='toolbox-icon-wrapper'
                            style={{
                                display: "inline-block"
                            }}
                        >
                            <button className='icon-button'
                                style={{ cursor: "pointer" }}
                                onClick={() => { handleHighlightOption(highlightedText); setPopoverState(false) }}
                            >
                                <svg width="25" height="25" viewBox="0 0 25 25">
                                    <path
                                        d="M13.7 15.96l5.2-9.38-4.72-2.62-5.2 9.38 4.72 2.62zm-.5.89l-1.3 2.37-1.26.54-.7 1.26-3.8-.86 1.23-2.22-.2-1.35 1.31-2.37 4.73 2.62z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div style={{
                            paddingRight: "6px",
                            display: "inline-block"
                        }}>
                            <button
                                style={{ cursor: 'pointer' }}
                                className='icon-button' onClick={() => { handleAddNoteOption() }}>
                                <svg width="25" height="25" viewBox="0 0 25 25">
                                    <path
                                        d="M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>
            </>
        );
    };

    const Highlight = ({ children, highlightIndex }) => (
        <span style={{ backgroundColor: "yellowgreen" }} className={""}>{children}</span>
    );

    return (
        <div>
            <HighlightableTextArea
                onHighlight={(text) => { console.log('====>text', text) }}
                onClear={handleClearHighlight}
                popoverItem={(HighlightedText, setPopoverState) => (
                    <ToolBar
                        highlightedText={HighlightedText}
                        setPopoverState={setPopoverState}
                    />
                )}
            >
                <p>
                    <Highlighter
                        searchWords={[highlightedText]}
                        autoEscape={true}
                        textToHighlight={`
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                            porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                            porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                            porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                            porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                            porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                            lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                            ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                            porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                        `}
                        // highlightClassName="highlighted-text"
                        highlightTag={({ children, index }) => { console.log("highlightTag called") }}
                    />
                </p>
            </HighlightableTextArea>
        </div>
    );
}

export default FloatingWindow;