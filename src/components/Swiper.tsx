import { ReactNode, useEffect, useRef } from 'react';
import { SwiperContainer } from 'swiper/element';
import { SwiperProps, SwiperSlideProps } from 'swiper/react';

export function Swiper(props: SwiperProps) {
  const swiperRef = useRef<SwiperContainer>(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {

    if (!swiperRef.current) return

    const params = {
      ...rest
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, params);

      swiperRef.current.initialize();
    }
  }, []);

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props: SwiperSlideProps) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children as ReactNode}
    </swiper-slide>
  );
}