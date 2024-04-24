type Props = {
    children: string;
}

export function Text({children = "hello"}: Props) {
    return <p>{children}</p>;
}

