import { User } from "../stores/user";

const numberFormat = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

export const formatPrice = (price: number) => {
  return numberFormat.format(price)
}

export const debounce = (callback: Function, wait: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: any[]) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export const getUserImage = (user: User | null) => {
  return import.meta.env.VITE_ENDPOINT + (user?.image ?? "/admin-assets/imgs/user.png")
}

export const getImage = (img?: string | null) => {
  return import.meta.env.VITE_ENDPOINT + img;
}