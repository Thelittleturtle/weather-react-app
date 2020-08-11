import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
    top: 30%;
    position: relative;
    padding:10px;
    margin: auto;
    border-bottom: 1px solid gray;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid gray;
    font-size: 25px;
`;

class SearchEmoji extends React.Component {
    state = {
        searchText: ""
    }

    TextChange = e => {
        this.setState({
            searchText: e.target.value
        })
        this.props.HandleChange(this.state.searchText);
    }

    render(){
        const {searchText} = this.state;
        return(
            <SearchBar>
                <SearchInput type='text' value={searchText} onChange={this.TextChange}/>
            </SearchBar>
        )
    }
}

export default SearchEmoji