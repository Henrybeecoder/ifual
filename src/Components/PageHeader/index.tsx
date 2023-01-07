import { ReactNode } from "react";
import { ReactComponent as LeftSvg } from "../../assets/svg/left.svg";
import { ReactComponent as RightSvg } from "../../assets/svg/right.svg";
import { ReactComponent as FilterSvg } from "../../assets/navbericon/filter-outline.svg";
import { ReactComponent as EditOutlineSvg } from "../../assets/navbericon/edit-outline.svg";
import { ReactComponent as EditSvg } from "../../assets/navbericon/edit.svg";
import { ReactComponent as ArrowBackSvg } from "../../assets/svg/left.svg";
import styles from "./style.module.css";
import { Root, Trigger, Portal, Content } from "@radix-ui/react-popover";
import { useNavigate } from "react-router-dom";

export interface Props {
  parentPageTitle?: string;
  pageTitle: string;
  children?: ReactNode;
  backBtn?: boolean;
  onClickBackBtn?: () => void;
}

interface TitleProps extends Props {
  editBtn?: boolean;
  onClickEditBtn?: () => void;
}

export const TitleHeader = ({
  pageTitle,
  parentPageTitle,
  editBtn,
  onClickEditBtn,
  backBtn,
  onClickBackBtn,
}: TitleProps) => {
  const navigate = useNavigate();
  return (
    <>
      {backBtn ? (
        <button
          className={styles.backBtn}
          onClick={!onClickBackBtn ? () => navigate(-1) : onClickBackBtn}>
          <ArrowBackSvg />
          <p>Back</p>
        </button>
      ) : null}
      <div className={styles.headerFlex}>
        <h3 className='breadcrumb'>
          {parentPageTitle ? <span>{parentPageTitle} /</span> : null}{" "}
          {pageTitle}
        </h3>
        {editBtn ? (
          <button className={styles.editBtn} onClick={onClickEditBtn}>
            <h3>EDIT</h3>
            <EditSvg />
          </button>
        ) : null}
      </div>
    </>
  );
};

interface FilterModalProps {
  children?: ReactNode;
  options: string[];
  onSelect?: (value: string) => void;
  selected?: string;
}

export const FilterModal = ({
  options,
  selected,
  onSelect = () => {},
}: FilterModalProps) => {
  const active = (id: string) => !!(selected === id);
  return (
    <div>
      <Root>
        <Trigger asChild>
          <button
            style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <h3>Filter</h3>
            <FilterSvg />
          </button>
        </Trigger>
        <Portal>
          <Content className={styles.filterContainer}>
            <h3>Filter;</h3>
            <div className='divider' />
            <div className={styles.optionsContainer}>
              {options.map((option) => (
                <button
                  key={option}
                  className={`${active(option) ? "text-green" : ""}`}
                  onClick={() => onSelect(option)}>
                  {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                </button>
              ))}
            </div>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

const PageHeader = ({
  pageTitle,
  parentPageTitle,
  backBtn,
  onClickBackBtn,
  children,
}: Props) => {
  const navigate = useNavigate();
  return (
    <>
      {backBtn ? (
        <button
          className={styles.backBtn}
          onClick={!onClickBackBtn ? () => navigate(-1) : onClickBackBtn}>
          <ArrowBackSvg />
          <p>Back</p>
        </button>
      ) : null}
      <div className={styles.headerFlex}>
        <h3 className={styles.breadcrumb}>
          {parentPageTitle ? <span>{parentPageTitle} /</span> : null}{" "}
          {pageTitle}
        </h3>
        <div className={styles.childrenFlex}>{children}</div>
      </div>
    </>
  );
};

export interface EDBtnProps {
  onClick?: () => void;
  active?: boolean;
}

export const EditBtn = ({ onClick, active }: EDBtnProps) => {
  return (
    <button
      className={`${styles.editBtn} ${!active ? styles.edit : ""}`}
      onClick={onClick}>
      <h3 style={{ fontSize: "23px" }}>Edit</h3>
      <EditSvg />
    </button>
  );
};

export const DeleteBtn = ({ onClick, active }: EDBtnProps) => {
  return (
    <button
      className={`${styles.editBtn} ${!active ? styles.delete : ""}`}
      onClick={onClick}>
      <h3 style={{ fontSize: "23px" }}>Delete</h3>
      <EditSvg />
    </button>
  );
};

export interface PaginationProps {
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
  current: number | string;
  total: number;
}

export const Pagination = ({
  current,
  total,
  onLeftArrowClick,
  onRightArrowClick,
}: PaginationProps) => {
  return (
    <div className={styles.pagn}>
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
  );
};

interface PaginationOfProps {
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
  current: [number | string, number | string];
  total: number;
}

export const PaginationOf = ({
  current = [0, 0],
  total,
  onLeftArrowClick,
  onRightArrowClick,
}: PaginationOfProps) => {
  return (
    <div className={styles.pagnOf}>
      <div>
        <p>{current[0]}</p> - <p>{current[1]}</p> of <p>{total}</p>
      </div>
      <button onClick={onLeftArrowClick}>
        <LeftSvg />
      </button>
      <button onClick={onRightArrowClick}>
        <RightSvg />
      </button>
    </div>
  );
};

export default PageHeader;
