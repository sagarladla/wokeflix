export interface FeatureType {
  type?: string | null;
  genre?: string | null;
}

export interface FeatureListType {
  listItem: {
    title: string;
    type?: string;
    genre?: string;
    content?: Array<string>;
    _id: string;
  };
}
