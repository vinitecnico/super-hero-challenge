import React from 'react'
import { IContentProps } from '../../types'

const Content: React.FC<IContentProps> = ({ noBgColor, children, ...props }) => {
    return (
        <main className={`main`}>
            <div className={`content col-10 offset-1 ${noBgColor && 'no-bg-color'}`}>
                {children}
            </div>
        </main>
    )
}

export default Content