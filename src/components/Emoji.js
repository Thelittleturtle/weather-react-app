import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    border-bottom: 1px solid grey;
    height: auto;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;

    & .title {
        color: black;
        top: -5px;
        position: relative;
    }

    & .copy {
        float: right;
        top: 5px;
        right: 10px;
        position: relative;
        visibility: hidden;
        color: #ccc;
    }

    & img {
        width: 32px;
        height: 32px;
        color: #e6e600;
        margin-right: 10px;
    }

    &:hover .copy {
        visibility: visible;
    }

    &:hover {
        background-color: #b3b3b3;
    }
`;

const Emoji = (props) => {
    const emoji = props.emoji;
    const codePointHex = emoji.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return(
        <Row data-clipboard-text={emoji.symbol} className='copy-to-clipboard'>
            <img alt={emoji.title} src={src}></img>
            <span className='title'>{emoji.title}</span>
            <span className='copy'>Click to copy emoji</span>
        </Row>
    )
}

export default Emoji