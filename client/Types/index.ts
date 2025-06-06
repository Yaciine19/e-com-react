export type Product = {
  data: {
    id: number;
    documentId: string;
    productTitle: string;
    productPrice: number;
    productDescription: string;
    productRating: number;
    productCategory: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    productImg: ProductImage[];
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type ProductImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  sizeInBytes?: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null; // any
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};
