import React, { useState } from 'react';
import { HighlightableTextArea } from 'react-highlight-popover';
import Highlighter from 'react-highlight-words';
import './FloatingWindow.css'; // Import CSS for styling the tooltip

function FloatingWindow() {
    const [highlightedTexts, setHighlightedTexts] = useState([]);

    const handleClearHighlight = () => {
        setHighlightedTexts([]);
    };

    const handleHighlightOption = () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const newHighlight = {
            startIndex: range.startOffset,
            endIndex: range.endOffset,
        };
        setHighlightedTexts([...highlightedTexts, newHighlight]);
    };

    const getTextToHighlight = (text) => {
        return text.trim(); // Trim leading and trailing whitespace
    };

    const renderHighlightedText = () => {
        return highlightedTexts.map(({ startIndex, endIndex }, index) => (
            <span
                key={index}
                className="highlighted-text"
                onMouseEnter={() => handleMouseEnter(startIndex, endIndex)}
                onMouseLeave={() => handleMouseLeave()}
            >
                {getTextToHighlight(longTextContent).substring(startIndex, endIndex)}
            </span>
        ));
    };

    const handleMouseEnter = (startIndex, endIndex) => {
        // Show tooltip or popover with start and end index information
        console.log(`Selected text: Start Index - ${startIndex}, End Index - ${endIndex}`);
    };

    const handleMouseLeave = () => {
        // Hide tooltip or popover when mouse leaves the highlighted text
        console.log('Mouse left highlighted text');
    };

    const longTextContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
        adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
        Maecenas ligula massa, varius a, semper congue, euismod non, mi.
    `;

    return (
        <div>
            <HighlightableTextArea
                onHighlight={(text) => { console.log('====>text', text) }}
                onClear={handleClearHighlight}
                popoverItem={(HighlightedText, setPopoverState) => (
                    <div className="tooltip-container">
                        {renderHighlightedText()}
                        <div className="tooltip">Hover over highlighted text</div>
                    </div>
                )}
            >
                <p>
                    <Highlighter
                        searchWords={highlightedTexts.map(({ startIndex, endIndex }) =>
                            Highlighter.tokenizeText({
                                text: getTextToHighlight(longTextContent),
                                searchWords: [{ startIndex, endIndex }],
                            })
                        )}
                        autoEscape={true}
                        textToHighlight={longTextContent}
                        highlightTag={({ children, index }) => (
                            <span key={index} style={{ backgroundColor: "yellowgreen" }}>
                                {children}
                            </span>
                        )}
                    />
                </p>
            </HighlightableTextArea>
        </div>
    );
}

export default FloatingWindow;
