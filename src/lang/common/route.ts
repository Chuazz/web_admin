const root = '/admin';
const business = root + '/business';

const route_common = {
    dashboard: root,
    no_where: '',

    master_data: {
        branch: root + '/branch',
        payment_method: root + '/payment_method',
        product_category: root + '/product_category',
    },

    product: {
        phone: root + '/phone',
        earphone: root + '/earphone',
        accessory: root + '/accessory',
        adapter: root + '/adapter',
        cable: root + '/cable',
        phone_case: root + '/phone_case',
        power_bank: root + '/power_bank',
    },

    business: {
        voucher: business + '/voucher',
        price_policy: business + '/price_policy',
    },
};

export default route_common;
