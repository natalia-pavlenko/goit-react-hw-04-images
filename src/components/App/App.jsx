import * as FetchImages from 'service/axios-api';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { AppDiv, AppImg } from './App.styled';

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeImg, setLargeImg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImages = async () => {
      try {
        const data = await FetchImages.getImages(searchQuery, page);
        setTotalHits(data.totalHits);
        setGallery(prev => [...prev, ...data.hits]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [searchQuery, page]);
  console.log(gallery);

  const getSearchQuery = query => {
    if (query === '') {
      alert ('Please enter text')
      return;
    }
    setSearchQuery(query);
    setPage(1);
    setGallery([]);
   
  };
  const toggelModal = () => {
    setShowModal(prev => !prev);
  };

   const handleClickLoadMoreBtn = () => {
      setPage(prev => prev + 1);
  };
  const isShowBtn = gallery.length < totalHits;
    return (
      <>
        <Searchbar onSubmit={getSearchQuery} />
        {gallery && <ImageGallery gallery={gallery} />}
        {showModal && (
          <Modal onClose={toggelModal}>
            <AppDiv>
              <AppImg src={largeImg} alt="" />
            </AppDiv>
          </Modal>
        )}

        {isShowBtn && <Button onClick={handleClickLoadMoreBtn} />}
      </>
    );

};
export default App;
