import admin_menu_vi from '@/lang/vi/admin_menu';
import common_vi from '@/lang/vi/common';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

function SiteMap() {
    const path = usePathname();
    const [curr_route, setCurrRoute] = useState('');
    const bread_crumbs = useMemo(() => {
        let new_path = path.replace('/', '');
        let routes = new_path.split('/');

        setCurrRoute(routes[routes.length - 1]);

        return routes;
    }, [path]);

    return (
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0">
                        {common_vi.category}{' '}
                        <span className="lowercase">
                            {admin_menu_vi[curr_route] ? admin_menu_vi[curr_route] : admin_menu_vi.dashboard}
                        </span>
                    </h1>
                </div>

                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        {bread_crumbs.map((bread_crumb, i) => {
                            let active = curr_route === bread_crumb;
                            let href = '/' + bread_crumb + '/';
                            let route = admin_menu_vi[bread_crumb] ? admin_menu_vi[bread_crumb] : bread_crumb;

                            return (
                                <li className={clsx('breadcrumb-item capitalize', { active: active })} key={i}>
                                    {active ? route : <Link href={href}>{route}</Link>}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default SiteMap;
