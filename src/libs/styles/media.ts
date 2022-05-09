export const mediaMaxQuery = (maxWidth: number) =>
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
} as const;

const { xxlarge, xlarge, large, medium, small, xsmall } = mediaSize;

export const mediaMax = {
  xxlarge: mediaMaxQuery(xxlarge),
  xlarge: mediaMaxQuery(xlarge),
  large: mediaMaxQuery(large),
  medium: mediaMaxQuery(medium),
  small: mediaMaxQuery(small),
  xsmall: mediaMaxQuery(xsmall),
};

export const mediaMin = {
  xxlarge: mediaMinQuery(xxlarge),
  xlarge: mediaMinQuery(xlarge),
  large: mediaMinQuery(large),
  medium: mediaMinQuery(medium),
  small: mediaMinQuery(small),
  xsmall: mediaMinQuery(xsmall),
};
