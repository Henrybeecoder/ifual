import { ReactComponent as LeftSvg } from "../../assets/svg/left.svg";
import { ReactComponent as RightSvg } from "../../assets/svg/right.svg";

interface Props {
  parentPageTitle?: string;
  pageTitle: string;
}

interface PagnProps extends Props {
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
  current: number;
  total: number;
}

export const PagnHeader = ({
  pageTitle,
  onLeftArrowClick,
  onRightArrowClick,
  parentPageTitle,
  current,
  total,
}: PagnProps) => {
  return (
    <div className='flex-btwn'>
      <h3 className='breadcrumb'>
        {parentPageTitle ? <span>{parentPageTitle} /</span> : null} {pageTitle}
      </h3>
      <div className='header-sort'>
        <div>
          <span>{current}</span>/<p>{total}</p>
        </div>
        <button onClick={onLeftArrowClick}>
          <LeftSvg />
        </button>
        <button onClick={onRightArrowClick}>
          <RightSvg />
        </button>
      </div>
    </div>
  );
};

export const TitleHeader = ({ pageTitle, parentPageTitle }: Props) => {
  return (
    <div className='flex-btwn'>
      <h3 className='breadcrumb'>
        {parentPageTitle ? <span>{parentPageTitle} /</span> : null} {pageTitle}
      </h3>
    </div>
  );
};
