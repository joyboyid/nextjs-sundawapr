import React from 'react';
import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { POSTS_PATH } from '@/libs/helpers';
import ArticlesGrid from '@/components/ArticlesGrid';
import PageTitle from '@/components/PageTitle';
import Container from '@/components/Container';
import clsx from 'clsx';
import styles from '@/components/styles';
import Meta from '@/components/Meta';

export default function index({ articles }) {
    return (
        <>
            <Meta
                title='Articles / Sundawa-Pr'
                url={`https://sundawa-pr.com/articles`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className='mb-4'>
                        <PageTitle>My Articles</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Everything that is on my mind, I will write here.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10'>
                        <ArticlesGrid articles={articles} />
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
