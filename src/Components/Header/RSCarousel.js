import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './RSCarousel.css'

const items = [
  {
    src: 'https://images.unsplash.com/photo-1516676237310-04deffe44aac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cd8bd13ab46a63087effa911ac3fa15&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1489683903361-f6b802049b26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7be30f92ee74e53cc0208401364c8059&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1524194330928-5d5120bd6515?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3261c730abb3b63f16d088efa2c5b0a0&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class RSCarousel extends Component {
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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className='carousel-slides'>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>

      </div>
    );
  }
}


export default RSCarousel;