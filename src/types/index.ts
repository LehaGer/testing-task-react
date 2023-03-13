import React, { ReactNode } from 'react';

export interface IPromocodeInfo {
  name: string;
  slug: string;
  startedAt: string;
  endedAt: string;
  title: string;
  description: string;
  isShowLabel: number;
  designParams: {
    textColor: string;
    backgroundColor: string;
    labelStyle: null;
  };
  unlimited: boolean;
  gifts: null;
}

export interface IDateInfo {
  release: null;
  create: string;
  update: string;
}

export interface IPriceInfo {
  current: number;
  old: number;
  discount: {
    market: {
      percent: number;
      amount: number;
    };
    promocode: {
      percent: number;
      amount: number;
    };
  };
  retail: number;
  retailOld: number;
  wholesale: number;
  wholesaleOld: number;
  symbol: string;
}

export interface IBrandInfo {
  id: number;
  value: string;
  slug: string;
}

export interface ICategoryInfo {
  id: number;
  parentId: number;
  value: string;
  sorting: number;
}

export interface IColorInfo {
  id: number;
  value: string;
  hex: string;
}

export interface IFabricInfo {
  id: number;
  value: string;
}

export interface IHeightInfo {
  id: number;
  value: string;
}

export interface IKitInfo {
  id: number;
  value: string;
}

export interface ISizeInfo {
  id: number;
  isActual: boolean;
  value: string;
}

export interface IPhotoInfo {
  original: string;
  800: string;
  660: string;
  440: string;
  330: string;
  260: string;
  220: string;
  60: string;
}

export interface IVideoInfo {
  original: string;
  800: string;
  660: string;
  440: string;
  330: string;
  260: string;
  220: string;
  60: string;
}

export interface IProductInfo {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  isActive: boolean;
  isOutlet: boolean;
  isForsale: boolean;
  isCotton: boolean;
  isLinen: boolean;
  isNew: boolean;
  isFitting: boolean;
  status: string;
  availabilityStatus: null;
  fabricText: string;
  description: string;
  salePercent: number;
  promocode: IPromocodeInfo;
  date: IDateInfo;
  price: IPriceInfo;
  categoryId: number;
  brandId: number;
  seasonId: number;
  questionsCount: number;
  reviewsCount: number;
  url: string;
  brand: IBrandInfo;
  category: ICategoryInfo;
  colors: IColorInfo[];
  fabrics: IFabricInfo[];
  heights: IHeightInfo[];
  kits: IKitInfo[];
  sizes: ISizeInfo[];
  photos: IPhotoInfo[];
  videos: IVideoInfo[];
  otherColors: IColorInfo[];
  recommended: Omit<IProductInfo, 'recommendations'>[];
  inFavorite: boolean;
}

export interface IProductInfoRowResult {
  data: IProductInfo;
  message: string;
}

export interface IProductQueryAttributes {
  productId: string;
}

export interface IAppProviderProps {
  children?: ReactNode;
}

export interface IGoToCommentButtonProps {
  className?: string;
  amount: number;
}

export interface IGoToCommentButtonProps {
  className?: string;
  amount: number;
}

export interface IPriceProps {
  data: Pick<IProductInfo, 'price' | 'promocode'>;
  className?: string;
}

export interface IProductDescriptionProps {
  className?: string;
  data: IProductInfo;
}

export interface IProductNameProps {
  name: string;
  className?: string;
}

export interface IProductNameView {
  data: Pick<IProductInfo, 'photos' | 'videos' | 'isNew' | 'promocode'>;
  className?: string;
}

export interface IProductNameViewList {
  data: Pick<IProductInfo, 'photos' | 'videos'>;
  className?: string;
}

export interface IProductNameViewListItem {
  className?: string;
  type: ProductListItemType;
  preview: string;
  onClick: (type: ProductListItemType, id: string) => void;
  photoId: string;
}

export interface IRecommendationsProps {
  className?: string;
}

export interface ISalesStats {
  className?: string;
  boughtAmount: number;
  inBucketAmount: number;
}

export interface IBackButtonProps {
  className?: string;
}

export interface IDownButtonProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

export interface IGoToButtonProps {
  className?: string;
  icon: string;
  name: string;
  amount: number;
}

export interface IUpButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  isActive: boolean;
  className?: string;
}

export interface IRightBottomLabel {
  className?: string;
  children?: ReactNode;
}

export enum ProductListItemType {
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
}
