import React from 'react';
import "./StoryReel.css";
import profilelogo from './image0.jpeg';
import background from './beach-Oahu-Hawaii.jpg';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story title="Brett Winterstrom" profileSrc={profilelogo} image={background} />
            <Story title="Brett Winterstrom" profileSrc={profilelogo} image={background} />
            <Story title="Brett Winterstrom" profileSrc={profilelogo} image={background} />
            <Story title="Brett Winterstrom" profileSrc={profilelogo} image={background} />
            <Story title="Brett Winterstrom" profileSrc={profilelogo} image={background} />
        </div>
    )
}

export default StoryReel
