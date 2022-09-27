import React from 'react';
import PageTitle from '@/components/PageTitle';
import MyPictureWithSocial from '@/components/MyPictureWithSocial';
import Container from '@/components/Container';
import styles from '@/components/styles';
import Meta from '@/components/Meta';
export default function About() {
  return (
    <>
      <Meta
        title='About / Sundawa-Pr'
        url='https://www.sundawa-pr.com'
      />
      <div className={styles.whiteLayoutWithPaddingY}>
        <Container>
          <div className='flex flex-col-reverse gap-10 lg:flex-row'>
            <div className='w-full lg:w-2/3'>
              <PageTitle className='mb-6'>
                About Sundawa-Pr
              </PageTitle>
              <section className='prose dark:prose-invert lg:prose-lg'>
                <p>
                  Sundawa is a social enterprise that produces and distributes
                  traditional weaving, promote culture exprience,
                  and improve economic welfare in rural areas in indinesia.
                </p>
                <p>
                  we work with women artisans in Pringgasela,
                  Lombok Nusa Tenggara Barat. creating handmade traditional
                  weaving using indigenous weaving techniques, material and natural
                  coloring process that has been passed down through generation.
                </p>
                <PageTitle className='mb-6'>
                  Sundawa Motiv Philosophy
                </PageTitle>
                <p>
                  Sundawa is the name of river in Pringgasela Village. For the
                  people of Pringgasela. Sundawa is not just a river but a source
                  of life. Become a source of irrigation for the community and
                  oasis of farm life there.
                </p>
                <p>
                  Sundawa is a marker of the culture and social life of the Pringgasela people.
                  in the pas, Sundawa were used     by the community for traditional
                  activities such as weddings or village events, baby showers, bridal
                  showers    , and other traditional events. in addition, this river is also
                  believed to be a place to get a mate.
                </p>
              </section>
            </div>
            <div className='w-full lg:w-1/3'>
              <MyPictureWithSocial />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
