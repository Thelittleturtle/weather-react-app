import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import Clipboard from 'clipboard';

const Result = styled.div`
    display: flex;
    flex-direction: column;
`;

class SearchResult extends React.Component {

    componentDidMount() {
        this.clipboard = new Clipboard('.copy-to-clipboard');
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
    const emojis = this.props.emojis;
    const emojiRows = emojis.map(emoji => (
        <Emoji key={emoji.title.toString()} emoji={emoji}></Emoji>
    ));
    return(
        <Result>
           {emojiRows}
        </Result>
        )
    }
}

export default SearchResult