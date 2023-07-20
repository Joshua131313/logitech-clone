import AppTooltip from 'app/components/ui/AppTooltip/AppTooltip'
import React from 'react'
import './MousePageTemplate.css'

export interface Props extends React.ComponentPropsWithoutRef<"div"> {

}

const MousePageTemplate = (props: Props) => {
    const {
        title,
        className,
        ...rest
    } = props

    return (
        <div className={`mouse-page-template ${className}`} {...rest}>
            <div className="n-header flex-row sb">
                <div className="header-part flex-row ac gap-10">
                    <i className='fa fa-long-arrow-left'></i>
                    <h1>{title}</h1>
                </div>
                <div className="shortcut-icons">
                    <AppTooltip 
                        tooltipRender='Global settings'
                        anchorSelect='.grid-icon'
                    >
                        <i className="fal fa-th-large grid-icon app-icon"></i>
                    </AppTooltip>
                </div>
            </div>
            <div className="sidebar"></div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default MousePageTemplate