import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [blocks, setBlocks] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = blocks.map((block) => {
        return <Block color = {block}></Block>;
    }); 

    const handleClick = (color) => {
        setBlocks([color, ...blocks]);
      };

    return (
        <div>
            <Menu handleClick={handleClick}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;