export interface ICategoryArray {
    id: string;
    name: {
        ar: string;
        en: string;
    };
    description?: {
        ar?: string;
        en?: string;
    };
    imageURL?: string;
    slug?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    parentID?: string;
    productsCount?: number;
}

export type createCategoty = Omit<ICategoryArray, 'id' | 'createdAt' | 'updatedAt'>;