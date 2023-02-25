import Container from '@/components/Container';
import Meta from '@/components/Meta';
// import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';

import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
                            <p>
                                Coming Soon . . . . . .!
                            </p>
                        </Carousel>
                    </div>
                </Container>
            </div>
        </>
    );
}
