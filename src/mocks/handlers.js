import { rest } from 'msw';
import loveMeNow from '../assets/img/love-me-now.jpeg';
import runIt from '../assets/img/run-it.jpeg';
import lazySusan from '../assets/img/lazy-susan.jpeg';

const handlers = [
  rest.get('/browse', (req, res, ctx) => {
    const data = {
      albums: {
        items: [
          {
            id: '111',
            name: 'Love me now',
            album_type: 'single',
            images: [
              {
                url: loveMeNow,
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/0GzKBZSFdg6H5ZlYJ6RgCo',
            },
          },
          {
            id: '112',
            name: 'Run It',
            album_type: 'single',
            images: [
              {
                url: runIt,
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/1FV8d1q44uSeqkGK7fNh3D',
            },
          },
          {
            id: '113',
            name: 'Lazy Susan',
            album_type: 'single',
            images: [
              {
                url: lazySusan,
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2IDLDx25HU1nQMKde4n61a',
            },
          },
          {
            id: '114',
            name: 'Love me now',
            album_type: 'single',
            images: [
              {
                url: loveMeNow,
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/0GzKBZSFdg6H5ZlYJ6RgCo',
            },
          },
          {
            id: '115',
            name: 'Run It',
            album_type: 'single',
            images: [
              {
                url: runIt,
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/album/1FV8d1q44uSeqkGK7fNh3D',
            },
          },
          {
            id: '116',
            name: 'Lazy Susan',
            album_type: 'single',
            images: [
              {
                url: lazySusan,
              },
            ],
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2IDLDx25HU1nQMKde4n61a',
            },
          },
        ],
      },
    };

    return res(ctx.json(data));
  }),
];

export default handlers;
