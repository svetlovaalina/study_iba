import React, { useRef } from 'react';
import classes from './PhoneCardList.module.css';
import { useSelector } from 'react-redux';
import { PhoneCard } from '../PhoneCard';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { CSSTransition } from 'react-transition-group';
import { updateCurrentPage } from 'src/store/actionCreators/updateCurrentPage';
import { currentPageSelector } from '../../../store/selectors/currentPageSelector';
import { ButtonShowMore } from '../../common/ButtonShowMore';

export const PhoneCardList = ({ error, loading, phoneListStore, sortTypeStore, searchTextStore, animationCall }) => {
  const animationList = useRef(null);
  const currentPage = useSelector(currentPageSelector);

  return (
    <div className={classes.container}>
      {error && (
        <Alert variant="danger" className={classes.alert}>
          Error: {error.name}
          {error.message}
        </Alert>
      )}
      {loading && <Spinner animation="border" className="spinner" />}
      <CSSTransition in={animationCall} timeout={1000} nodeRef={animationList} classNames="animationList">
        <div className={classes.listAnimation} ref={animationList}>
          {phoneListStore
            .sort((prevPhone, phone) => (prevPhone[sortTypeStore] < phone[sortTypeStore] ? -1 : 1))
            .filter((phoneListObj) => phoneListObj.name.toLowerCase().includes(searchTextStore.toLowerCase()))
            .slice(0, currentPage * 5 + 5)
            .map((item) => (
              <PhoneCard
                className={classes.containerPhoneCard}
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                snippet={item.snippet}
              />
            ))}
        </div>
      </CSSTransition>
      {currentPage + 1 <
        Math.ceil(
          phoneListStore
            .sort((prevPhone, phone) => (prevPhone[sortTypeStore] < phone[sortTypeStore] ? -1 : 1))
            .filter((phoneListObj) => phoneListObj.name.toLowerCase().includes(searchTextStore.toLowerCase()))
            .map((item) => (
              <PhoneCard
                className={classes.containerPhoneCard}
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                snippet={item.snippet}
              />
            )).length / 5
        ) && <ButtonShowMore />}
    </div>
  );
};
