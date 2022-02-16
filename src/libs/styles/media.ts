export const mediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const mediaMinQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

/**
 * xxlarge : large Desktop size,
 * xlarge : Desktop size,
 * large : large Tablet size,
 * medium : Tabket size,
 * small : large Mobile size,
 * xsmall : Mobile size,
 */
export const mediaSize = {
  xxlarge: 1920,
  xlarge: 1366,
  large: 1024,
  medium: 768,
  small: 414,
  xsmall: 320,
};

const { xxlarge, xlarge, large, medium, small, xsmall } = mediaSize;

const media = {
  xxlarge: mediaQuery(xxlarge),
  xlarge: mediaQuery(xlarge),
  large: mediaQuery(large),
  medium: mediaQuery(medium),
  small: mediaQuery(small),
  xsmall: mediaQuery(xsmall),
};

export default media;
