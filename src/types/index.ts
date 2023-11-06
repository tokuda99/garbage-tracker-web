export type PostType = {
    sendDateTime: string;
    gps: string;
  };

export type Location = {
  lat: string | null;
  lng: string | null; 
}

export type Watch = {
  isWatching: boolean;
  watchId: number | null;
};
