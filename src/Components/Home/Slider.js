import React from 'react';
import wedding from '../../images/wedding-1.jpg';
import holud from '../../images/holud-3.jpg';
import event from '../../images/event-1.jpg';

const Slider = () => {

   const imgstyle = {
        width: '500px',
        height: '500px'
    }
    return (
        <div class=" pt-2 pb-5">
            <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={imgstyle} src={wedding} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block  text-white  bg-primary rounded">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={imgstyle} src={holud} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block  text-white  bg-primary rounded">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={imgstyle} src={event} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-white  bg-primary rounded">
                            <h5 className="">Third slide label</h5>
                            <p className="">Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;