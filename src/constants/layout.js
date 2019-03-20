import i18n from './../utils/i18n';

export const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 9},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    colon: false
};
export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 17,
        }
    },
};

// Add new Rider

export const RIDER_PROPERTY = {
    username: i18n.t('username'),
    email: 'Email',
    password: i18n.t('password'),
    firstName: i18n.t('firstname'),
    lastName: i18n.t('lastname'),
    mobile: i18n.t('mobile')
}

// Update profile rider
export const RIDER_UPDATE_PROPERTY = {
    firstName: i18n.t('rider_form.label.firstname'),
    lastName: i18n.t('rider_form.label.lastname'),
    mobile: i18n.t('rider_form.label.mobile')
}

// Update profile operator
export const OPERATOR_UPDATE_PROPERTY = {
    fullName: i18n.t('operators.operator_form.label.fullname'),
    gender: i18n.t('gender')
}

// Assign Hub to team

export const HUB_ASSIGN = {
    PICKUP: 'Pickup Hub',
    DELIVER: 'Delivery Hub'
}