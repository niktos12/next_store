module.exports = {
    images: {
      domains: ['avatars.mds.yandex.net', "main-cdn.sbermegamarket.ru"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'main-cdn.sbermegamarket.ru',
          port: '',
          pathname: '/**',
        }
      ]
    },
  }