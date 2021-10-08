import "./index.scss";

type TextsType = Array<string>;
type ListChildren = {
  icon: string;
  texts: TextsType;
};

const ApplicationsHover: React.FC<{ list: Array<ListChildren> }> = ({
  list,
}) => {
  return (
    <div className="applications_dat">
      {list.map((item: ListChildren, _: number) => {
        return (
          <div className="applications_box" key={_}>
            <div className="applications_box_top">
              <img className="icon_image" src={item.icon} alt="" />
            </div>
            <div className="applications_box_bottom">
              {item.texts.map((value: string, key: number) => (
                <span key={key}>{value}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationsHover;
