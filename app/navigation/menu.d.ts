export interface IMenu {
    name: string,
    glyphicon: string,
    route: string,
    expanded?: boolean,
    children: IMenuChild[]
}

export interface IMenuChild {
    name: string,
    route: string
}