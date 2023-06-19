'use client';

import brand from '@/assets/images/icon/brand.jpg';
import male from '@/assets/images/icon/male.jpeg';
import Sidebar from '@/components/Sidebar';
import SiteMap from '@/components/SiteMap';
import license_common from '@/lang/common/license';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import Link from 'next/link';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="wrapper">
            <nav className="bg-white main-header navbar navbar-expand navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link" data-widget="pushmenu" role="button">
                            <i className="fas fa-bars"></i>
                        </div>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <div className="nav-link">Trang chủ</div>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="nav-link" data-widget="navbar-search" role="button">
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input
                                        className="form-control form-control-navbar"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <div className="nav-link" data-toggle="dropdown">
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </div>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <div className="dropdown-item">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning">
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1"></i> 4 Hours Ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item dropdown-footer">See All Messages</div>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <div className="nav-link" data-toggle="dropdown">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </div>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item dropdown-footer">See All Notifications</div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" data-widget="fullscreen" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </div>
                    </li>
                </ul>
            </nav>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="brand-link">
                    <Image src={brand} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <Link href={'#'} className="brand-text font-weight-light text-white">
                        {license_common.store_name}
                    </Link>
                </div>

                <div className="sidebar" style={{ overflowY: 'auto' }}>
                    <div className="user-panel mt-3 pb-3 mb-3">
                        <div className="image">
                            <Image src={male} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <span className="d-block text-white">Ngô Văn Sơn</span>
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input
                                className="form-control form-control-sidebar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                        <div className="sidebar-search-results">
                            <div className="list-group">
                                <div className="list-group-item">
                                    <div className="search-title">
                                        <strong className="text-light"></strong>N
                                        <strong className="text-light"></strong>o
                                        <strong className="text-light"></strong>{' '}
                                        <strong className="text-light"></strong>e
                                        <strong className="text-light"></strong>l
                                        <strong className="text-light"></strong>e
                                        <strong className="text-light"></strong>m
                                        <strong className="text-light"></strong>e
                                        <strong className="text-light"></strong>n
                                        <strong className="text-light"></strong>t
                                        <strong className="text-light"></strong>{' '}
                                        <strong className="text-light"></strong>f
                                        <strong className="text-light"></strong>o
                                        <strong className="text-light"></strong>u
                                        <strong className="text-light"></strong>n
                                        <strong className="text-light"></strong>d
                                        <strong className="text-light"></strong>!
                                        <strong className="text-light"></strong>
                                    </div>
                                    <div className="search-path"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <Sidebar />
                    </nav>
                </div>
            </aside>

            <div className="content-wrapper" style={{ minHeight: 429.2 }}>
                <div className="content-header">
                    <SiteMap />
                </div>

                <div className="content">
                    <div className="container-fluid">{children}</div>
                </div>
            </div>

            <footer className="main-footer text-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <strong>{license_common.copy_right}</strong>
                    <div className="font-bold text-blue-700">{license_common.store_name}</div>
                </div>
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> {license_common.version}
                </div>
            </footer>
            <div id="sidebar-overlay"></div>
        </div>
    );
}

export default Layout;
