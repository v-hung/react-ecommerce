import React from "react";

import type { SwiperSlideProps, SwiperProps } from 'swiper/react';

type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

type KebabObjectKeys<T> = {
  [key in keyof T as Kebab<key & string>]: T[key] extends Object
    ? KebabObjectKeys<T[key]>
    : T[key];
};

type SwiperPropsCustom = Omit<KebabObjectKeys<SwiperProps>, "breakpoints" | "navigation"> & {
  breakpoints?: string | SwiperProps["breakpoints"]
  navigation?: string | SwiperProps["navigation"]
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperPropsCustom,
        HTMLElement
      > & {class?: string};

      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      > & {class?: string};
    }
  }
}