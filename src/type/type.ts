type treeNode = {
    name: string;
    fillColor?: string;
    attributes?: {
        Department: string;
        isFullTime: true;
        weeklyHours: number;
    },
    children?: treeNode[]
}

export interface NodeDatumType {
    name: string;
    fillColor?: string;
    children?: treeNode[];
}