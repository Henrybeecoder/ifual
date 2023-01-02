import { ReactNode } from "react";
import { ReactComponent as LeftSvg } from "../../assets/svg/left.svg";
import { ReactComponent as RightSvg } from "../../assets/svg/right.svg";
import { ReactComponent as FilterSvg } from "../../assets/navbericon/filter-outline.svg";
import { ReactComponent as EditSvg } from "../../assets/navbericon/edit-outline.svg";
import { ReactComponent as ArrowBackSvg } from "../../assets/svg/left.svg";
import styles from "./style.module.css";
import { Root, Trigger, Portal, Content } from "@radix-ui/react-popover";
import { useNavigate } from "react-router-dom";

interface Props {
  parentPageTitle?: string;
  pageTitle: string;
  children?: ReactNode;
  backBtn?: boolean;
  onClickBackBtn?: () => void;
}

interface PagnProps extends Props {
  onLeftArrowClick?: () => void;
  onRightArrowClick?: () => void;
  current: number | string;
  total: number;
  editBtn?: boolean;
  onClickEditBtn?: () => void;
}

interface FilterHeaderProps extends Props {
  options: string[];
  onSelect?: (value: string) => void;
  selected?: string;
}

interface TitleProps extends Props {
  editBtn?: boolean;
  onClickEditBtn?: () => void;
}

export const PagnHeader = ({
  pageTitle,
  onLeftArrowClick,
  onRightArrowClick,
  parentPageTitle,
  current,
  total,
  editBtn,
  onClickEditBtn,
  children,
  backBtn,
  onClickBackBtn,
}: PagnProps) => {
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
        <div className={styles.flexLg}>
          <div className={styles.headerSort}>
            {editBtn ? (
              <button className={styles.editBtn} onClick={onClickEditBtn}>
                <h3>EDIT</h3>
                <EditSvg />
              </button>
            ) : null}
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
          {children}
        </div>
      </div>
    </>
  );
};

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

export const FilterHeader = ({
  pageTitle,
  parentPageTitle,
  children,
  options,
  onSelect,
  selected,
  backBtn,
  onClickBackBtn,
}: FilterHeaderProps) => {
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
      <div className={styles.flexLg}>
        {" "}
        <div className={styles.headerFlex}>
          <h3 className='breadcrumb'>
            {parentPageTitle ? <span>{parentPageTitle} /</span> : null}{" "}
            {pageTitle}
          </h3>

          <FilterModal
            options={options}
            selected={selected}
            onSelect={onSelect}
          />
        </div>{" "}
        {children}
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

interface PagnFilterProps extends PagnProps {
  options: string[];
  onSelect?: (value: string) => void;
  selected?: string;
}

export const PagnHeaderWFilter = ({
  children,
  pageTitle,
  parentPageTitle,
  current,
  total,
  onLeftArrowClick,
  onRightArrowClick,
  options,
  selected,
  onSelect,
}: PagnFilterProps) => {
  return (
    <div className={styles.headerFlex}>
      <h3 className='breadcrumb'>
        {parentPageTitle ? <span>{parentPageTitle} /</span> : null} {pageTitle}
      </h3>
      <div className='header-sort'>
        {/* {editBtn ? (
          <button className={styles.editBtn} onClick={onClickEditBtn}>
            <h3>EDIT</h3>
            <EditSvg />
          </button>
        ) : null} */}
        <div>
          <p>{current}</p>of<p>{total}</p>
        </div>
        <button onClick={onLeftArrowClick}>
          <LeftSvg />
        </button>
        <button onClick={onRightArrowClick}>
          <RightSvg />
        </button>
        <FilterModal
          options={options}
          onSelect={onSelect}
          selected={selected}
        />
      </div>
    </div>
  );
};

export const PageHeader = ({
  pageTitle,
  parentPageTitle,
  // editBtn,
  // onClickEditBtn,
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
        <h3 className='breadcrumb'>
          {parentPageTitle ? <span>{parentPageTitle} /</span> : null}{" "}
          {pageTitle}
        </h3>
        <div className={styles.childrenFlex}>{children}</div>
      </div>
    </>
  );
};

export const EditBtn = ({
  onClickEditBtn,
}: {
  onClickEditBtn?: () => void;
}) => {
  return (
    <button className={styles.editBtn} onClick={onClickEditBtn}>
      <h3>EDIT</h3>
      <EditSvg />
    </button>
  );
};

interface PaginationProps {
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
