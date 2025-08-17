const config = {
    PORT: process.env.PORT || 3000,
    settings: {
        design: {
            background_hex: '#333',
            header_image: null,
            layout: ['projects', 'links', 'interests']
        },
        profile: {
            personal: {
                profile_url: '/profile_img.jpg',
                name: 'Randy Yuan Kurnianto',
                is_verified: true,
                pronunciation: null,
                pronouns: 'He/She?',
                location: 'Sragen, Jawa Tengah',
                about: 'Just a newbie exploring the world of coding.'
            },
            professional: {
                job_title: 'Web Developer',
                company: 'NekoLabs.'
            },
            projects: [
                {
                    thumbnail: null,
                    name: 'Rynn UI (Open Source)',
                    desc: 'A simple and easy-to-use API documentation interface built with Express.js.',
                    link: 'https://github.com/rynn-k/Rynn-UI'
                },
                {
                    thumbnail: null,
                    name: 'NekoAPIs',
                    desc: 'A streamlined REST API service designed for developers who need quick access to multiple API functionalities in one place.',
                    link: 'https://api.nekoo.qzz.io'
                },
                {
                    thumbnail: null,
                    name: 'NekOtaku.',
                    desc: 'An anime streaming platform with a minimalist, ad-free, and user-friendly interface for a seamless viewing experience.',
                    link: 'https://otaku.nekoo.qzz.io'
                },
                {
                    thumbnail: null,
                    name: 'Mnmlist AI',
                    desc: 'A minimalist AI tool designed for simplicity and clarity. Focus on what matters—no clutter, just intelligent solutions.',
                    link: 'https://mnmlist.qzz.io'
                }
            ],
            links: [
                {
                    name: 'GitHub',
                    is_verified: true,
                    link: 'https://github.com/rynn-k'
                },
                {
                    name: 'Instagram',
                    is_verified: true,
                    link: 'https://instagram.com/ran.dyyn'
                },
                {
                    name: 'Telegram',
                    is_verified: true,
                    link: 'https://t.me/rynnajahh'
                }
            ],
            interests: ['Coding', 'Music', 'Gaming', 'Anime']
        }
    }
};

module.exports = config;
