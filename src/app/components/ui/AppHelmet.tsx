import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
    title: string
}

const AppHelmet = (props: Props) => {
    const {title} = props
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );

};

export default AppHelmet;