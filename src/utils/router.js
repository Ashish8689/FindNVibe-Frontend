const PLACEHOLDER_ID = ':id';

export const AppRoute = {
    HOME:'/',
    ABOUT: '/about',
    BLOG: '/blog',
    COLLECTION: '/collection',
    CONTACT:'/contact',
    LOGIN:`/login`,
    ALL_DESTINATION: '/allDestination',
    SINGLE_DESTINATION: `/singleDestination/${PLACEHOLDER_ID}`,
    PRIVACY_POLICY: '/privacyPolicy',
    TERMS_CONDITION:'/termsAndCondition',
    ADD_PACKAGE:'/package/add',
    EDIT_PACKAGE:'/package/edit',
    BLOG_SINGLE:`/blog/${PLACEHOLDER_ID}`,
};

export default AppRoute;