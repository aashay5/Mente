import { render } from '@testing-library/react';
import React from 'react';
import ReactSound from 'react-sound';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video/video-2.mov" loop={true}  autoPlay={true} muted/>
            <h1>ETHICALLY AESTHETIC</h1>
            <p>Being conscious while styling.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    WATCH TRAILER<i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
