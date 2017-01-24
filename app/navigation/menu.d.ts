export interface IMenu {
    name: string,
    glyphicon: string,
    route: string,
    selected?: boolean,
    expanded?: boolean,
    children?: IMenuChild[]
}

export interface IMenuChild {
    name: string,
    route: string,
    selected?: boolean,
}