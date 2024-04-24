type listProps = {
  listData: {
    title: string;
    description: string;
  }[];
  variant: string;
};

const List = ({ listData, variant }: listProps) => {
  return (
    <ul className={variant}>
      {listData.map((item) => (
        <li>
          <span>{item.title}:</span>
          {item.description}
        </li>
      ))}
    </ul>
  );
};

export default List;
