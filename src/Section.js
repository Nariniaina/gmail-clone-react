import React from 'react';
import './Section.css';

function Section({Icon, title, color, selected}) {
    return (
        <div className={`section ${selected && "section--selected"}`}
            style={{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`,
                // if selected > give color
            }}
            // How we put directly css style in props
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section
