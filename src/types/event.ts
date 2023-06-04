export interface EVENT_TYPE {
  id: string;
  location: string;
  mount: string;
  day: string;
  thumbnail: string;
  detail: DETAIL_TYPE;
}
export interface DETAIL_TYPE {
  map: any;
  filter: any;
  title: string;
  about: string;
  endDate: number;
  expirationdate: number;
  id: string;
  location: string;
  price: number;
  rating: number;
  startDate: number;
  thumbnail: string;
  ticketcount: number;
  city: {
    name: string;
  };
  country: {
    name: string;
  };
  category: {
    name: string;
    id: string;
  };
}
