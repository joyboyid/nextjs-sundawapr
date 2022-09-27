import { socials } from '@/libs/socials';
import React from 'react';
import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { POSTS_PATH } from '@/libs/helpers';
import ProjectAtHome from '@/components/ProjectAtHome';
import Head from 'next/head';
import PageTitle from '@/components/PageTitle';
import Container from '@/components/Container';
import styles from '@/components/styles';
import clsx from 'clsx';
import Link from 'next/link';
import Meta from '@/components/Meta';
import Image from 'next/image';

export default function index() {
    const lazyRoot = React.useRef(null);
    return (
        <>
            <Meta title='Sundawa-Pr' url={`https://www.sundawa-pr.com`} />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div>
                        <PageTitle className='mb-3 lg:mb-6'>
                            Sundawa-Pr
                        </PageTitle>
                    </div>
                    <div
                        id='articles'
                        className='flex flex-col gap-6 lg:flex-row lg:gap-10'
                    >
                        <div ref={lazyRoot}>
                            <Image
                                lazyRoot={lazyRoot}
                                src='/images/produk/5.JPG'
                                width='600'
                                height='400'
                            />
                        </div>

                        <div className='w-full lg:w-1/3'>
                            <div
                                className={clsx(
                                    // styles.flexCenter,

                                    'flex items-center justify-end gap-1'
                                )}
                            >
                                <span className={styles.textMuted}>
                                    Follow me ⎯⎯⎯⎯
                                </span>
                                {socials.map(({ url, icon: Icon }, i) => (
                                    <Link href={url} key={i}>
                                        <a
                                            className={clsx(
                                                styles.flexCenter,
                                                'h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800'
                                            )}
                                        >
                                            <Icon
                                                stroke={1}
                                                className='h-5 w-5'
                                            />
                                        </a>
                                    </Link>
                                ))}
                            </div>

                            <div className='mt-4'>
                                <ProjectAtHome />
                            </div>
                        </div>
                    </div>
                    <div class='mt-5'>
                        <section className='prose dark:prose-invert lg:prose-lg'>
                            <p>
                                I get asked a lot about the things I use to
                                build software, stay productive, or buy to fool
                                myself into thinking I’m being productive when
                                I’m really just procrastinating. Here’s a big
                                list of all of my favorite stuff.
                            </p>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            articles: getArticles()
                .slice(0, 9)
                .map((post) => post.meta),
        },
    };
}

const getSlugs = () => {
    const paths = sync(`${POSTS_PATH}/*.mdx`);

    return paths.map((path) => {
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split('.');
        return slug;
    });
};

const getPostFromSlug = (slug) => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? 'slug',
            title: data.title ?? slug,
            tags: data?.tags?.sort(),
            date: data?.date?.toString(),
        },
    };
};

const getArticles = () => {
    return getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
};
