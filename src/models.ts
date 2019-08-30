export interface Response {
    content:          Content[];
    pageable:         Pageable;
    facets:           any[];
    aggregations:     null;
    scrollId:         null;
    maxScore:         number;
    totalPages:       number;
    totalElements:    number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    last:             boolean;
    size:             number;
    number:           number;
    empty:            boolean;
}

export interface Content {
    id:          number | null;
    eventType:   string;
    module:      string;
    loginid:     string;
    message:     string;
    description: string;
    timestamp:   string;
}

export interface Pageable {
    sort:       Sort;
    pageNumber: number;
    pageSize:   number;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    unsorted: boolean;
    sorted:   boolean;
    empty:    boolean;
}