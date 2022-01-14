import React from 'react';
import {FrontPageContainer,FrontPageImageDiv,FrontPageTextDiv,ButtonContainerFrontPage } from './Front-Page-Image.styles';

const FrontPageImage = () =>{
    return (
        <FrontPageContainer>
            <FrontPageImageDiv>
                <FrontPageTextDiv>
                    <h1>Wake up with that familiar aroma</h1>
                    <p>Enjoy every day with a refreshing coffee from our wide selection</p>
                    <ButtonContainerFrontPage>Shop Now</ButtonContainerFrontPage>
                </FrontPageTextDiv>
            </FrontPageImageDiv>
        </FrontPageContainer>
    )
};

export default FrontPageImage;