import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: 'https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbWlseSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        altText: 'Dad and Son',
        caption: 'Family'
    },
    {
        src: 'https://images.unsplash.com/photo-1508943050604-605048ae62c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWF0ZXJuaXR5JTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        altText: 'Pregnant Woman',
        caption: 'Maternity'
    },
    {
        src: 'https://images.unsplash.com/photo-1617818046956-38df20876e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ld2Jvcm4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        altText: 'Newborn Baby',
        caption: 'Newborn'
    }
];

class HomeHero extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption  captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <>
                            <div style={{
                    height: '35px'
                }}></div>
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                style={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
            </>
        );
    }
}


export default HomeHero;