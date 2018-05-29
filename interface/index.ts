import { GeometryType } from '../enum';

export interface JwtPayload {
  id: number;
}

export interface Point {
  type: GeometryType;
  coordinates: number[];
}

export interface Pin {
  lat: number;
  lng: number;
  title?: string;
  icon?: {
    path: string;
    width: number;
    height: number;
  };
  infoWindow?: {
    maxWidth?: number;
    contentFn(pin: Pin): string;
  };
  meta?: any;
}
