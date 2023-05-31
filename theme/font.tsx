import { Global } from '@mantine/core';

const ubuntu = 'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Ubuntu, sans-serif',
            src: `url('${ubuntu}')`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}

export default CustomFonts;