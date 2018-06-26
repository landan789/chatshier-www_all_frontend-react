import React from 'react';
import MetaTags from 'react-meta-tags';
import { withDomain } from '../../helpers/i18ndomain.js';

const Meta = (props) => (
    <MetaTags>
        <title>專業客服整合平台</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000"/>
        <meta property="og:site_name" content={`"${props.t('META_SITE_NAME')}"`}/>
        <meta property="og:title" content={`"${props.t('META_TITLE')}"`}/>
        <meta property="og:url" content={`"${props.t('META_URL')}"`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={`"${props.t('META_DESCRIPTION')}"`}/>
        <meta property="og:image" content=""/>
        <meta property="og:image:width" content="1000"/>
        <meta property="og:image:height" content="666"/>
        <meta itemProp="name" content={`"${props.t('META_TITLE')}"`}/>
        <meta itemProp="url" content={`"${props.t('META_URL')}"`}/>
        <meta itemProp="description" content={`"${props.t('META_DESCRIPTION')}"`}/>
        <meta name="twitter:title" content={`"${props.t('META_TITLE')}"`}/>
        <meta name="twitter:url" content={`"${props.t('META_URL')}"`}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content={`"${props.t('META_DESCRIPTION')}"`}/>
        <meta name="description" content={`"${props.t('META_DESCRIPTION')}"`}/>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossOrigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:700" rel="stylesheet"/>
    </MetaTags>
);

export default withDomain(Meta);