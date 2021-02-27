import { css } from 'styled-components';



const sizes:object|any = {
  bp900: 900,
  bp600: 600,
  bp400: 400,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator:any, label:string) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize:number = sizes[label] / 16;
  accumulator[label] = (...args:any) => css`
    @media (max-width: ${emSize}em) {
      ${css(args,...args)};
    }
  `;
  return accumulator;
}, {});

export default media;