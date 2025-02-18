import React, { useRef } from 'react';

import Slider from 'react-slick';
import Head from 'next/head';

import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

import ResponsibilityCard_Symbol from './responsibility_card_symbol';
import ResponsibilityCard_Symbol_Bottom from './responsibility_card_Symbol_Bottom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const titletext = ["Paisa Hi ",  <span key={uuidv4()} style={{color: "#C70039"}}>Paisa</span>, " Hoga"];
// const lor = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque animi nihil deleniti modi hic voluptatibus dolorem. Ea eaque repellendus odio rem illo perferendis eveniet? Molestias doloremque id pariatur reiciendis iste!`

const ResponsibilityCarousel = () => {
  const sliderRef = useRef<any>();

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const ArrowLeft = () => (
    <ArrowLeftIcon
      onClick={previous}
      // style={{ position: 'absolute', left: '-20px', top: '50%', zIndex: 10 }}
      className={'arrow prev'}
    ></ArrowLeftIcon>
  );

  const ArrowRight = () => (
    <ArrowRightIcon
      onClick={next}
      // style={{ position: 'absolute', right: '-20px', top: '50%' }}
      className={'arrow next'}
    ></ArrowRightIcon>
  );

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    float: 'left',
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 970,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 760,
        settings: {
          infinite: true,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 540,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div style={{ justifyContent: 'center', margin: '30px' }}>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>

      <Slider {...settings} ref={sliderRef}>
        <ResponsibilityCard_Symbol
          logo='/publicise.png'
          text='Promoting various events and activites around the campus'
          heading='PUBLICISE'
        />
        {/* <ResponsibilityCard></ResponsibilityCard> */}
        <ResponsibilityCard_Symbol_Bottom
          logo='/coordinate.png'
          text='Plan, arrange and execute events and workshops'
          heading='COORDINATE'
        />
        {/* <ResponsibilityCard></ResponsibilityCard> */}
        <ResponsibilityCard_Symbol
          logo='/socialmedia.png'
          text='Create awareness and generate buzz around the campus'
          heading='SOCIAL MEDIA'
        />

        {/* <ResponsibilityCard></ResponsibilityCard> */}
        <ResponsibilityCard_Symbol_Bottom
          logo='/tasks.png'
          text='Manage time and resources for maximum efficiency'
          heading='TASKS'
        />

        <ResponsibilityCard_Symbol
          logo='/socialdev.png'
          text='Hone communication, empathy, teamwork for success and fulfillment.'
          heading='SOCIAL DEVELOPMENT'
        />

        <ResponsibilityCard_Symbol_Bottom
          logo='/coordinate.png'
          text='Plan, arrange and execute events and workshops'
          heading='COORDINATE'
        />

        <ResponsibilityCard_Symbol
          logo='/socialmedia.png'
          text='Create awareness and generate buzz around the campus'
          heading='SOCIAL MEDIA'
        />

        <ResponsibilityCard_Symbol_Bottom
          logo='/tasks.png'
          text='Manage time and resources for maximum efficiency'
          heading='TASKS'
        />
      </Slider>
    </div>
  );
};

export default ResponsibilityCarousel;
