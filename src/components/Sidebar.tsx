import admin_menu_conf from '@/configs/admin_menu';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function Sidebar() {
    const path = usePathname();
    const [curr_parent, setCurrParent] = useState('dashboard');

    const onItemClick = (parent: string) => {
        setCurrParent(parent);
    };

    return (
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {admin_menu_conf.map((t, i) => {
                return (
                    <li className="nav-item" key={i}>
                        {t.route ? (
                            <Link
                                href={'#'}
                                className={clsx('nav-link', { active: t.id === curr_parent })}
                                onClick={() => onItemClick(t.id)}
                            >
                                <i className={clsx(t.icon)}></i>
                                <p>
                                    {t.label}
                                    {t.sub_menu && <i className="fas fa-angle-left right"></i>}
                                </p>
                            </Link>
                        ) : (
                            <div className={clsx('nav-link', { active: t.id === curr_parent })}>
                                <i className={clsx(t.icon)}></i>
                                <p>
                                    {t.label}
                                    {t.sub_menu && <i className="fas fa-angle-left right"></i>}
                                </p>
                            </div>
                        )}
                        {t.sub_menu && (
                            <ul className="nav nav-treeview" style={{ display: 'none' }}>
                                {t.sub_menu.map((c, j) => (
                                    <li className="nav-item" key={j}>
                                        <Link
                                            href={clsx(c.route)}
                                            className={clsx('nav-link', { active: c.route === path })}
                                            onClick={() => onItemClick(t.id)}
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>{c.label}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default Sidebar;
