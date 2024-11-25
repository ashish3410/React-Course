import React from 'react'

function Botton({
    children,
    type="button",
    bgColor="bg-blue-600",
    textColor="text-white",
    classname='',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${type} ${textColor} ${classname}`} {...props}>
            {children}
        </button>
    )
}

export default Botton
