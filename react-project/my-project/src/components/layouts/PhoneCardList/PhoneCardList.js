import React, { useRef } from 'react';
import classes from './PhoneCardList.module.css';
import { PhoneCard } from '../PhoneCard';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { CSSTransition } from 'react-transition-group';
import { ButtonShowMore } from '../../common/ButtonShowMore';
import { useShowMore } from '../../../hook/useShowMore/useShowMore';
import { maxPhoneNumberOnPage } from '../../../const/const';

export const PhoneCardList = ({ error, loading, phoneListStore, sortTypeStore, searchTextStore, animationCall, phoneListChanged }) => {
  // const phoneListChanged = phoneListStore
  //   .sort((prevPhone, phone) => (prevPhone[sortTypeStore] < phone[sortTypeStore] ? -1 : 1))
  //   .filter((phoneListObj) => phoneListObj.name.toLowerCase().includes(searchTextStore.toLowerCase()));
  // const maxCountPage = phoneListStore.length / maxPhoneNumberOnPage;
  // const [itemRows, isShowMoreVisible, showMore] = useShowMore({ items: phoneListChanged, maxPhoneNumberOnPage });
  const animationList = useRef(null);

  const [itemRows, isShowMoreVisible, showMore] = useShowMore({ items: phoneListChanged, maxPhoneNumberOnPage });

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
          {itemRows.map((item) => (
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
      {isShowMoreVisible && <ButtonShowMore showMore={showMore} />}
    </div>
  );
};
