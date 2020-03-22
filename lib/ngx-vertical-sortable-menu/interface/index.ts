type iconTy = 'class';
export interface MenuItem {
    name: string;
    url: string;
    icon?: string;
    id?: string | number;
    iconType?: iconTy;
}
