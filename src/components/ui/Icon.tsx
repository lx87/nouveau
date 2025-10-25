interface Props {
    iconName: str
}

const Icon = ({ iconName }: Props) => {
    const formattedName = `bi bi-${iconName}`
    return (
        <i className={formattedName}></i>
    );
};

export default Icon;