export type DealImage = {
  path: string;
  alt?: string | null;
  caption?: string | null;
  type?: string | null;
};

export type DealOverview = {
  content: string;
  images?: DealImage[];
};

export type DealHighlight = {
  caption?: string;
  content?: string;
  image?: string | null;
  imageAlt?: string | null;
};

export type DealItinerary = {
  id: number;
  day: number;
  content: string;
  image?: string | null;
  imageAlt?: string | null;
};

export type DealHotel = {
  name?: string;
  description?: string;
  rating?: string;
  amenities?: string;
  roomAmenities?: string;
  images?: DealImage[];
};

export type DealData = {
  id: number;
  title: string;
  slug: string;
  price: string;
  farePrice?: string;
  currency?: string;
  saveUpto?: number;
  dealOfferEndCaption?: string;
  finePrint?: string;
  contactEmail?: string | null;
  contactNo?: string | null;
  heroImages?: DealImage[];
  overview: DealOverview;
  highlight?: DealHighlight;
  itineraries?: DealItinerary[];
  hotels?: DealHotel[];
  excursions?: string;
  payment?: string;
  timeToTravel?: string;
  dealDestinations?: Array<{
    noOfNights?: number;
    destination?: {
      name?: string;
      country?: string;
      image?: DealImage;
    };
  }>;
  socialVibes?: {
    facebookPostText?: string;
  };
  dealFAQs?: Array<{
    id: number;
    question: string;
    answer: string;
  }>;
};
