import ImgLoaded from 'app/components/ui/ImgLoaded/ImgLoaded'
import { addDeviceOptions } from 'app/data/generalData'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddDevice.css'

export interface Props {

}

const AddDevice = (props: Props) => {
    const {

    } = props
    const [faded, setFaded] = useState(false)
    const navigate = useNavigate()

    const Option = (props: {
        img: string;
        title: string;
        subTitle: string;
    }) => {
        const {
            img, subTitle, title
        } = props
        return (
            <div className="option flex-row ac sb">
                <div className='flex-row'>
                    <ImgLoaded src={img}/>
                    <div className="flex-col">
                        <strong>{title}</strong>
                        <span>{subTitle}</span>
                    </div>
                </div>
                <i className='fal fa-chevron-right'></i>
            </div>
        )
    }

    const optionsRender = addDeviceOptions.map(option=> {
        return  (
            <Option 
                {...option}
            />
        )
    })
    useEffect(()=> {
        setFaded(true)
        return () => {
            setFaded(false)
        }
    }, [])
    return (
        <div className={`add-device flex-col sb ${faded ? 'fade' : ''}`}>
            <div className="header">
                <i 
                    onClick={()=> navigate(-1)}
                    className='fal fa-long-arrow-left'
                ></i>
                <h2>Select connection type</h2>
                <div></div>
            </div>
            <div className="options-container">
                <div className="options flex-col">
                    {optionsRender}
                </div>
            </div>
            <div className="note">
                <span>Look for a matching logo mark on the bottom of your device to see if it's a Bolt or Unifying device.</span>
            </div>
        </div>
    )
}

export default AddDevice