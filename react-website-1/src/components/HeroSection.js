import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btn">
                <Button
                    className='btns'
                    buttonStyle='btns--outline'
                    buttonSize='btn--large'
                >GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btns--primary'
                    buttonSize='btn--large'
                >WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
