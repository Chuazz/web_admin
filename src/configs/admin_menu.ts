import permission_common from '@/lang/common/permission';
import route_common from '@/lang/common/route';
import admin_menu_vi from '@/lang/vi/admin_menu';
import MenuType from '@/types/menu';

type AdminMenuType = {
    id: string;
    icon?: string;
    label: string;
    route?: string;
    permission: string;
    sub_menu?: MenuType[];
};

const admin_menu_conf: AdminMenuType[] = [
    {
        id: 'dashboard',
        icon: 'nav-icon fas fa-chart-pie',
        label: admin_menu_vi.dashboard,
        permission: permission_common.view_dashboard,
        route: route_common.dashboard,
    },
    {
        id: 'master_data',
        icon: 'nav-icon fas fa-cogs',
        label: admin_menu_vi.master_data,
        permission: permission_common.view_master_data,
        sub_menu: [
            {
                id: 'branch',
                label: admin_menu_vi.branch,
                route: route_common.master_data.branch,
            },
            {
                id: 'payment_method',
                label: admin_menu_vi.payment_method,
                route: route_common.master_data.payment_method,
            },
            {
                id: 'product_category',
                label: admin_menu_vi.product_category,
                route: route_common.master_data.product_category,
            },
        ],
    },
    {
        id: 'product',
        icon: 'nav-icon fas fa-boxes',
        label: admin_menu_vi.product,
        permission: permission_common.view_product,
        sub_menu: [
            {
                id: 'phone',
                label: admin_menu_vi.phone,
                route: route_common.product.phone,
            },
            {
                id: 'earphone',
                label: admin_menu_vi.earphone,
                route: route_common.product.earphone,
            },
            {
                id: 'adapter',
                label: admin_menu_vi.adapter,
                route: route_common.product.adapter,
            },
            {
                id: 'cable',
                label: admin_menu_vi.cable,
                route: route_common.product.cable,
            },
            {
                id: 'phone_case',
                label: admin_menu_vi.phone_case,
                route: route_common.product.phone_case,
            },
            {
                id: 'power_bank',
                label: admin_menu_vi.power_bank,
                route: route_common.product.power_bank,
            },
            {
                id: 'accessory',
                label: admin_menu_vi.accessory,
                route: route_common.product.accessory,
            },
        ],
    },
    {
        id: 'business',
        icon: 'nav-icon fa fa-cubes',
        label: admin_menu_vi.business,
        permission: '',
        sub_menu: [
            {
                id: 'voucher',
                label: admin_menu_vi.voucher,
                permission: permission_common.view_voucher,
                route: route_common.business.voucher,
            },
            {
                id: 'price_policy',
                label: admin_menu_vi.price_policy,
                permission: permission_common.view_price_policy,
                route: route_common.business.price_policy,
            },
        ],
    },
];

export default admin_menu_conf;
