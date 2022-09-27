import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';

import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Projects() {
    return (
        <>
            <Meta
                title='Products / Sundawa-Pr'
                url={`https://sundawa-pr.com/uses`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div>
                        <Carousel>
                            <div>
                                <img src='images/produk/1.JPG' alt='image1' />
                                <p className='legend'>Image 1</p>
                            </div>
                            <div>
                                <img src='images/produk/2.JPG' alt='image2' />
                                <p className='legend'>Image 2</p>
                            </div>
                            <div>
                                <img src='images/produk/3.JPG' alt='image3' />
                                <p className='legend'>Image 3</p>
                            </div>
                            <div>
                                <img src='images/produk/4.JPG' alt='image4' />
                                <p className='legend'>Image 4</p>
                            </div>
                            <div>
                                <img src='images/produk/5.JPG' alt='image5' />
                                <p className='legend'>Image 5</p>
                            </div>
                        </Carousel>
                    </div>
                </Container>
            </div>
        </>
    );
}
