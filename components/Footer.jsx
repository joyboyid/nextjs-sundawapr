import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Container from './Container';
import styles from './styles';
import { socials } from '@/libs/socials';

export default function Footer() {
    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                    <ul className='flex items-center gap-x-4'>
                        <NavLink href='/' value='Home' />
                        <NavLink href='/about' value='About' />
                        <NavLink href='/articles' value='Articles' />
                        <NavLink href='/projects' value='Products' />
                        <NavLink href='/uses' value='Uses' />
                    </ul>
                    <div className={clsx(styles.textMuted, 'text-right')}>
                        <div
                            className={clsx(
                                // styles.flexCenter,

                                'flex items-center justify-end gap-1'
                            )}
                        >
                            {socials.map(({ url, icon: Icon }, i) => (
                                <Link href={url} key={i}>
                                    <a
                                        className={clsx(
                                            styles.flexCenter,
                                            'h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800'
                                        )}
                                    >
                                        <Icon stroke={1} className='h-5 w-5' />
                                    </a>
                                </Link>
                            ))}
                        </div>
                        © 2022 Sundawa-Pr
                    </div>
                </div>
            </Container>
        </div>
    );
}

function NavLink({ href, value, children }) {
    return (
        <li>
            <Link href={href}>
                <a className={styles.textMuted}>{value || children}</a>
            </Link>
        </li>
    );
}
