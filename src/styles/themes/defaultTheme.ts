import { extendTheme } from '@chakra-ui/react'
export const defaultTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: '#121214',
        color: '#FFFFFF',
      },
      'body, input, textarea, select, button': {
        font: "400 1rem 'Roboto', sans-serif",
      },
      button: {
        cursor: 'pointer',
      },
      "@media ('max-width: 1080px')": {
        html: {
          fontSize: '93.75%',
        },
      },
      "@media ('max-width: 720px')": {
        html: {
          fontSize: '87.5%',
        },
      },
    }),
  },
  colors: {
    gray: {
      '50': '#EEEEF2',
      '100': '#D1D2DC',
      '200': '#B3B5C6',
      '300': '#9699B0',
      '400': '#797D9A',
      '500': '#616480',
      '600': '#4B4D63',
      '700': '#353646',
      '800': '#1F2029',
      '900': '#181B23',
    },
  },
  components: {
    Text: {
      variants: {
        headerLink: {
          display: 'inline-block',
          position: 'relative',
          padding: '0.5rem',
          height: '5rem',
          lineHeight: '5rem',
          color: '#a8a8b3',

          transition: 'color 0.2s',

          '&:hover': {
            color: '#FFFFFF',
          },

          '&.active': {
            color: '#yellow',
          },
        },
        'span-home': {
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
        'h1-home': {
          fontSize: '4.5rem',
          fontWeight: '900',
          lineHeight: '4.5rem',
          marginTop: '2.5rem',

          strong: {
            color: '#61dafb',
          },
        },
        'p-home': {
          fontSize: '1.5rem',
          lineHeight: '2.25rem',
          marginTop: '1.5rem',

          span: {
            color: '#61dafb',
            fontWeight: 'bold',
          },
        },
      },
      postText: {
        color: '#a8a8b3',
        marginTop: '0.5rem',
        lineHeight: 1.625,
      },
    },
    Link: {
      variants: {
        postLink: {
          display: 'block',
          textDecoration: 'none',

          '&+a': {
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid #323238',
          },

          time: {
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            color: '#a8a8b3',
          },

          strong: {
            display: 'block',
            fontSize: '1.5rem',

            marginTop: '1rem',
            lineHeight: '2rem',

            transition: 'color 0.2s',
          },

          '&:hover strong': {
            color: '#eba417',
          },
        },
      },
    },
  },
})
