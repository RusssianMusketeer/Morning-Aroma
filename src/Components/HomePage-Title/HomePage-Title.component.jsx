import React from 'react';
import "./HomePage-Title.styles.scss";
import { ReactComponent as TextDivider } from '../../Assets/text-divider.svg';

const HomePageTitle = () =>{
    return (
        <section className="Title-Section">
            <div>
                <h1 className="Title-Slogan">WAKE UP WITH THAT FAMILIAR AROMA</h1>
            </div>
            <div className="text-divider-div">
            <TextDivider/>
            </div>
            <div className="title-p-div">
            <p>Welcome to Morning Aroma</p>
            </div>
        
        </section>
    );
}

export default HomePageTitle;