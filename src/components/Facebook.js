import React from "react"

const Facebook = props => {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill={props.fill ? "currentColor" : "none"}
            stroke={props.fill ? "none" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-facebook"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        
    )
}

export default Facebook

Facebook.defaultProps = {
    width: 24,
    height: 24,
}
